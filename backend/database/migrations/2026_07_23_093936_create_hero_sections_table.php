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
        Schema::create('hero_sections', function (Blueprint $table) {

            $table->id();

            // Nama halaman
            $table->string('page')->unique();

            // Judul Hero
            $table->string('title');

            // Subtitle / Badge
            $table->string('subtitle')->nullable();

            // Deskripsi
            $table->text('description')->nullable();

            // Background Hero
            $table->string('background_image')->nullable();

            // Tombol
            $table->string('button_text')->nullable();
            $table->string('button_link')->nullable();

            // Overlay
            $table->string('overlay_color')->default('#000000');
            $table->decimal('overlay_opacity', 3, 2)->default(0.60);

            // Status
            $table->boolean('is_active')->default(true);

            // Urutan
            $table->unsignedInteger('order_number')->default(1);

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hero_sections');
    }
};