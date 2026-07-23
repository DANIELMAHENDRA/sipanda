<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {

            $table->id();

            // Informasi pengguna
            $table->string('name');
            $table->string('username')->unique();
            $table->string('email')->unique();

            $table->timestamp('email_verified_at')->nullable();

            $table->string('password');

            // Foto profil admin
            $table->string('photo')->nullable();

            // Role
            $table->enum('role', [
                'super_admin',
                'admin',
                'editor'
            ])->default('admin');

            // Status akun
            $table->boolean('is_active')->default(true);

            // Login terakhir
            $table->timestamp('last_login_at')->nullable();

            $table->rememberToken();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};