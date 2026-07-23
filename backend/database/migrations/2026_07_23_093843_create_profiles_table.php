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
        Schema::create('profiles', function (Blueprint $table) {

            $table->id();

            // Informasi Dasar Desa
            $table->string('village_name');
            $table->string('village_head')->nullable();
            $table->string('district');
            $table->string('regency');
            $table->string('province');

            // Logo & Hero
            $table->string('logo')->nullable();
            $table->string('hero_image')->nullable();

            // Profil Desa
            $table->longText('history')->nullable();
            $table->longText('vision')->nullable();
            $table->longText('mission')->nullable();

            // Geografi
            $table->decimal('area', 10, 2)->nullable()->comment('Luas wilayah (Ha)');
            $table->integer('population')->nullable();
            $table->integer('family_count')->nullable();
            $table->integer('hamlet_count')->nullable();
            $table->integer('rt_count')->nullable();
            $table->integer('rw_count')->nullable();

            // Batas Wilayah
            $table->text('north_boundary')->nullable();
            $table->text('south_boundary')->nullable();
            $table->text('east_boundary')->nullable();
            $table->text('west_boundary')->nullable();

            // Koordinat
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();

            // Status
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};