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
        Schema::create('news', function (Blueprint $table) {

            $table->id();

            // Judul Berita
            $table->string('title');

            // URL SEO
            $table->string('slug')->unique();

            // Thumbnail
            $table->string('thumbnail')->nullable();

            // Isi Berita
            $table->longText('content');

            // Kategori
            $table->string('category');

            // Penulis (Relasi ke users)
            $table->foreignId('user_id')
                  ->constrained('users')
                  ->cascadeOnUpdate()
                  ->cascadeOnDelete();

            // Jumlah Dilihat
            $table->unsignedBigInteger('views')->default(0);

            // Berita Utama
            $table->boolean('is_featured')->default(false);

            // Status
            $table->enum('status', [
                'draft',
                'published'
            ])->default('draft');

            // Tanggal Publish
            $table->timestamp('published_at')->nullable();

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
        Schema::dropIfExists('news');
    }
};