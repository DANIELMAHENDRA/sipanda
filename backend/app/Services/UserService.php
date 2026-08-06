<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class UserService
{
    /**
     * Folder upload photo.
     */
    private const PHOTO_FOLDER = 'users/photo';

    /**
     * Constructor.
     */
    public function __construct(
        protected FileUploadService $fileUploadService,
        protected ActivityLogService $activityLogService,
    ) {
    }

    /**
     * Mengambil seluruh data user.
     */
    public function getAll(
        int $perPage = 10
    ): LengthAwarePaginator {

        return User::query()
            ->latest()
            ->paginate($perPage);

    }

    /**
     * Mengambil detail user.
     */
    public function getById(
        int $id
    ): User {

        return User::query()
            ->findOrFail($id);

    }

    /**
     * Menambahkan user baru.
     */
    public function store(
        array $data
    ): User {

        return DB::transaction(function () use ($data) {

            /*
            |--------------------------------------------------------------------------
            | Upload Photo
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('photo', $data)
                && $data['photo']
            ) {

                $data['photo'] = $this->fileUploadService->upload(
                    file: $data['photo'],
                    folder: self::PHOTO_FOLDER,
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Hash Password
            |--------------------------------------------------------------------------
            */

            $data['password'] = Hash::make(
                $data['password']
            );

            /*
            |--------------------------------------------------------------------------
            | Simpan User
            |--------------------------------------------------------------------------
            */

            $user = User::create($data);

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(
                activity: 'Create User',
                module: 'User',
                description: 'Menambahkan user baru.',
                status: 'success',
            );

            /*
            |--------------------------------------------------------------------------
            | Return Fresh Data
            |--------------------------------------------------------------------------
            */

            return $user->fresh();

        });

    }

        /**
     * Memperbarui data user.
     */
    public function update(
        User $user,
        array $data
    ): User {

        return DB::transaction(function () use ($user, $data) {

            /*
            |--------------------------------------------------------------------------
            | Replace Photo
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('photo', $data)
                && $data['photo']
            ) {

                $data['photo'] = $this->fileUploadService->replace(
                    file: $data['photo'],
                    oldPath: $user->photo,
                    folder: self::PHOTO_FOLDER,
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Hash Password
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('password', $data)
                && filled($data['password'])
            ) {

                $data['password'] = Hash::make(
                    $data['password']
                );

            } else {

                unset($data['password']);

            }

            /*
            |--------------------------------------------------------------------------
            | Update Database
            |--------------------------------------------------------------------------
            */

            $user->update($data);

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(
                activity: 'Update User',
                module: 'User',
                description: 'Memperbarui data user.',
                status: 'success',
            );

            /*
            |--------------------------------------------------------------------------
            | Return Fresh Data
            |--------------------------------------------------------------------------
            */

            return $user->fresh();

        });

    }

        /**
     * Menghapus user.
     */
    public function destroy(
        User $user
    ): void {

        DB::transaction(function () use ($user) {

            /*
            |--------------------------------------------------------------------------
            | Tidak boleh menghapus akun sendiri
            |--------------------------------------------------------------------------
            */

            $this->cannotDeleteSelf($user);

            /*
            |--------------------------------------------------------------------------
            | Tidak boleh menghapus Super Admin terakhir
            |--------------------------------------------------------------------------
            */

            $this->cannotDeleteLastSuperAdmin($user);

            /*
            |--------------------------------------------------------------------------
            | Delete Photo
            |--------------------------------------------------------------------------
            */

            if ($user->photo) {

                $this->fileUploadService->delete(
                    $user->photo
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Delete Token
            |--------------------------------------------------------------------------
            */

            $user->tokens()->delete();

            /*
            |--------------------------------------------------------------------------
            | Delete User
            |--------------------------------------------------------------------------
            */

            $user->delete();

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(
                activity: 'Delete User',
                module: 'User',
                description: 'Menghapus user.',
                status: 'success',
            );

        });

    }

        /**
     * Mengaktifkan / Menonaktifkan user.
     */
    public function toggleStatus(
        User $user
    ): User {

        return DB::transaction(function () use ($user) {

            /*
            |--------------------------------------------------------------------------
            | Tidak boleh menonaktifkan akun sendiri
            |--------------------------------------------------------------------------
            */

            if (
                auth()->id() === $user->id
            ) {

                abort(
                    422,
                    'Anda tidak dapat menonaktifkan akun sendiri.'
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Tidak boleh menonaktifkan Super Admin terakhir
            |--------------------------------------------------------------------------
            */

            if (
                $user->role === 'super_admin'
                && $user->is_active
            ) {

                $count = User::where(
                    'role',
                    'super_admin'
                )
                    ->where(
                        'is_active',
                        true
                    )
                    ->count();

                if ($count <= 1) {

                    abort(
                        422,
                        'Minimal harus ada satu Super Admin aktif.'
                    );

                }

            }

            /*
            |--------------------------------------------------------------------------
            | Toggle Status
            |--------------------------------------------------------------------------
            */

            $user->update([

                'is_active' => !$user->is_active,

            ]);

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(

                activity: 'Toggle User Status',

                module: 'User',

                description: 'Mengubah status user.',

                status: 'success',

            );

            return $user->fresh();

        });

    }

        /**
     * Reset password user.
     */
    public function resetPassword(
        User $user,
        string $password
    ): User {

        return DB::transaction(function () use ($user, $password) {

            /*
            |--------------------------------------------------------------------------
            | Update Password
            |--------------------------------------------------------------------------
            */

            $user->update([

                'password' => Hash::make(
                    $password
                ),

            ]);

            /*
            |--------------------------------------------------------------------------
            | Logout Semua Device
            |--------------------------------------------------------------------------
            */

            $user->tokens()->delete();

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(

                activity: 'Reset Password',

                module: 'User',

                description: 'Reset password user.',

                status: 'success',

            );

            return $user->fresh();

        });

    }

        /**
     * Tidak boleh menghapus akun sendiri.
     */
    private function cannotDeleteSelf(
        User $user
    ): void {

        if (
            auth()->id() === $user->id
        ) {

            abort(
                422,
                'Anda tidak dapat menghapus akun sendiri.'
            );

        }

    }

    /**
     * Tidak boleh menghapus Super Admin terakhir.
     */
    private function cannotDeleteLastSuperAdmin(
        User $user
    ): void {

        if (
            $user->role !== 'super_admin'
        ) {
            return;
        }

        $count = User::query()
            ->where('role', 'super_admin')
            ->count();

        if ($count <= 1) {

            abort(
                422,
                'Minimal harus ada satu Super Admin.'
            );

        }

    }
}