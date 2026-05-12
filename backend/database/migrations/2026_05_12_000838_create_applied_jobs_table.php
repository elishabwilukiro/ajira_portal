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
        Schema::create('applied_jobs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_id')
                ->constrained('job_listings')
                ->onDelete('cascade');

            $table->foreignId('user_id')
                ->constrained('users')
                ->onDelete('cascade');

            $table->string('first_name')->nullable();        
            $table->string('last_name')->nullable();        
            $table->string('phone')->nullable();        
            $table->string('email')->nullable();        
            $table->string('linkedin')->nullable();        
            $table->text('resume');        
            $table->enum('status',['applied','accepted','rejected','expired'])->default('applied');
            $table->enum('archive',['0','1'])->default('0');
            $table->unique(['job_id','user_id']); // Prevent duplicate applications
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applied_jobs');
    }
};
