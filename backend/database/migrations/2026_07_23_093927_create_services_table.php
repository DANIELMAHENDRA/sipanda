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
        Schema::create('services', function (Blueprint $table) {

            $table->id();

            // Informasi layanan
            $table->string('title');
            $table->string('slug')->unique();

            // Icon (Lucide/Iconify)
            $table->string('icon')->nullable();

            // Deskripsi singkat
            $table->text('description')->nullable();

            // Persyaratan
            $table->longText('requirements')->nullable();

            // Prosedur pelayanan
            $table->longText('procedure')->nullable();

            // Lama proses
            $table->string('processing_time')->nullable();

            // Biaya
            $table->string('cost')->default('Gratis');

            // Penanggung jawab
            $table->string('person_in_charge')->nullable();

            // Nomor urut
            $table->unsignedInteger('order_number')->default(1);

            // Aktif / Tidak
            $table->boolean('is_active')->default(true);

            // Admin pembuat
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
        Schema::dropIfExists('services');
    }
};