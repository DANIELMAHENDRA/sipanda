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
        Schema::create('activity_logs', function (Blueprint $table) {

            $table->id();

            // User yang melakukan aktivitas
            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete()
                ->cascadeOnUpdate();

            // Nama aktivitas
            $table->string('activity');

            // Modul
            $table->string('module');

            // Deskripsi
            $table->text('description')->nullable();

            // IP Address
            $table->string('ip_address', 45)->nullable();

            // Browser / Device
            $table->text('user_agent')->nullable();

            // URL
            $table->string('url')->nullable();

            // HTTP Method
            $table->string('method', 10)->nullable();

            // Status aktivitas
            $table->enum('status', [
                'success',
                'failed'
            ])->default('success');

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activity_logs');
    }
};