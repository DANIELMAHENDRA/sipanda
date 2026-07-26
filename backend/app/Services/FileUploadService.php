<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FileUploadService
{
    /**
     * Upload file ke storage/public.
     *
     * @param UploadedFile $file
     * @param string $folder
     * @return string
     */
    public function upload(
        UploadedFile $file,
        string $folder
    ): string {

        $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();

        return $file->storeAs(
            $folder,
            $filename,
            'public'
        );
    }

    /**
     * Hapus file jika ada.
     *
     * @param string|null $path
     * @return void
     */
    public function delete(?string $path): void
    {
        if (!$path) {
            return;
        }

        if (Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }
    }

    /**
     * Replace file lama dengan file baru.
     *
     * @param UploadedFile|null $file
     * @param string|null $oldPath
     * @param string $folder
     * @return string|null
     */
    public function replace(
        ?UploadedFile $file,
        ?string $oldPath,
        string $folder
    ): ?string {

        if (!$file) {
            return $oldPath;
        }

        $this->delete($oldPath);

        return $this->upload(
            file: $file,
            folder: $folder
        );
    }

    /**
     * Mendapatkan URL file.
     *
     * @param string|null $path
     * @return string|null
     */
    public function url(?string $path): ?string
    {
        if (!$path) {
            return null;
        }

        return Storage::disk('public')->url($path);
    }
}