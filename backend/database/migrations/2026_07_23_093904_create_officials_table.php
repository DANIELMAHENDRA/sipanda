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
        Schema::create('officials', function (Blueprint $table) {

            $table->id();

            // Identitas
            $table->string('name');
            $table->string('nip')->nullable();

            // Jabatan
            $table->string('position');

            // Foto
            $table->string('photo')->nullable();

            // Profil Singkat
            $table->text('description')->nullable();

            // Sambutan (khusus kepala desa)
            $table->longText('message')->nullable();

            // Kontak
            $table->string('phone')->nullable();
            $table->string('email')->nullable();

            // Urutan tampil
            $table->unsignedInteger('order_number')->default(1);

            // Kepala Desa?
            $table->boolean('is_village_head')->default(false);

            // Status aktif
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('officials');
    }
};