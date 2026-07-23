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
        Schema::create('galleries', function (Blueprint $table) {

            $table->id();

            // Judul Foto
            $table->string('title');

            // URL SEO
            $table->string('slug')->unique();

            // File Foto
            $table->string('image');

            // Kategori
            $table->string('category');

            // Deskripsi
            $table->text('description')->nullable();

            // Lokasi kegiatan
            $table->string('location')->nullable();

            // Photographer / Dokumentasi
            $table->string('photographer')->nullable();

            // Tanggal kegiatan
            $table->date('taken_at')->nullable();

            // Urutan tampil
            $table->unsignedInteger('order_number')->default(1);

            // Foto unggulan
            $table->boolean('is_featured')->default(false);

            // Status publish
            $table->enum('status', [
                'draft',
                'published'
            ])->default('published');

            // Admin yang upload
            $table->foreignId('user_id')
                  ->constrained('users')
                  ->cascadeOnUpdate()
                  ->cascadeOnDelete();

            // Soft Delete
            $table->softDeletes();

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('galleries');
    }
};