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
        Schema::create('potentials', function (Blueprint $table) {

            $table->id();

            // Informasi Dasar
            $table->string('title');
            $table->string('slug')->unique();

            // Cover
            $table->string('thumbnail')->nullable();
            $table->string('cover_image')->nullable();

            // Kategori
            $table->string('category');

            // Ringkasan
            $table->text('excerpt')->nullable();

            // Isi Potensi
            $table->longText('content');

            // Statistik
            $table->string('statistic_1_title')->nullable();
            $table->string('statistic_1_value')->nullable();

            $table->string('statistic_2_title')->nullable();
            $table->string('statistic_2_value')->nullable();

            $table->string('statistic_3_title')->nullable();
            $table->string('statistic_3_value')->nullable();

            // Quote
            $table->longText('quote')->nullable();
            $table->string('quote_author')->nullable();

            // Highlight
            $table->boolean('is_featured')->default(false);

            // Status
            $table->enum('status', [
                'draft',
                'published'
            ])->default('published');

            // Publish
            $table->timestamp('published_at')->nullable();

            // Penulis
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
        Schema::dropIfExists('potentials');
    }
};