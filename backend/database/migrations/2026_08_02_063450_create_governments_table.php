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
        Schema::create('governments', function (Blueprint $table) {

            $table->id();

            // Informasi Perangkat Desa
            $table->string('name');

            $table->string('position');

            $table->string('photo')->nullable();

            $table->text('description')->nullable();

            // Urutan Tampil
            $table->unsignedInteger('order_number')->default(1);

            // Kepala Desa
            $table->boolean('is_head')->default(false);

            // Status
            $table->enum('status', [
                'draft',
                'published'
            ])->default('published');

            // Admin
            $table->foreignId('user_id')
                ->constrained('users')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->softDeletes();

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('governments');
    }
};