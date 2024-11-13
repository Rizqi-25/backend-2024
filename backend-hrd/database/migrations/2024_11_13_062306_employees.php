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
        Schema::create('employees', function (Blueprint $table) {
            $table->id(); // ID Pegawai (integer)
            $table->string('name'); // Nama Pegawai (string)
            $table->char('gender', 1); // Jenis Kelamin Pegawai (char)
            $table->string('phone'); // No HP Pegawai (string)
            $table->text('address'); // Alamat Pegawai (text)
            $table->string('email')->unique(); // Email Pegawai (string)
            $table->string('status'); // Status Pegawai (string)
            $table->date('hired_on'); // Tanggal Masuk Kerja (date)
            $table->timestamps(); // Timestamp (created_at & updated_at)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('employees');
    }
};
