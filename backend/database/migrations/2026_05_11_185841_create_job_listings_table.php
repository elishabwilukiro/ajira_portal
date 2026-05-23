<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // public function up(): void
    // {
    //     Schema::create('job_listings', function (Blueprint $table) {
    //         $table->id();
    //         $table-> foreignId('user_id')
    //             ->constrained('users')
    //             ->onDelete('cascade');

    //         // Job Details
    //         $table->string('title', 255)->nullable();
    //         $table->string('location', 255)->nullable();
    //         $table->enum('location_type',['remote','on-site','hybrid']);
    //         $table->decimal('min_salary',10,2)->nullable();
    //         $table->decimal('max_salary',10,2)->nullable();
    //         $table->enum('job_type',['Full-time','Part-time','Contract','Internship','Freelance']);
    //         $table->enum('level',['intern','junior','mid','senior','lead','manager']);
    //         $table->date('application_deadline');
    //         $table->timestamps('posted_date');

    //         // Company Info
    //         $table->string('company_name',255)->nullable();
    //         $table->text('company_description');
    //         $table->string('contact_person')->nullable();
    //         $table->string('company_email')->nullable();
    //         $table->string('department')->nullable();
    //         $table->string('website',255)->nullable();

    //         $table->enum('status',['0','1'])->default('0');
    //         $table->enum('archive',['0','1'])->default('0');
    //     });
    // }
    public function up(): void
    {
        Schema::create('job_listings', function (Blueprint $table) {

            $table->id();

            $table->foreignId('user_id')
                ->constrained('users')
                ->onDelete('cascade');

            // Job Details
            $table->string('title', 255)->nullable();

            $table->string('location', 255)->nullable();

            $table->enum('location_type', [
                'remote',
                'on-site',
                'hybrid'
            ])->nullable();

            $table->decimal('min_salary', 10, 2)->nullable();

            $table->decimal('max_salary', 10, 2)->nullable();

            $table->enum('job_type', [
                'Full-time',
                'Part-time',
                'Contract',
                'Internship',
                'Freelance'
            ])->nullable();

            $table->enum('level', [
                'intern',
                'junior',
                'mid',
                'senior',
                'lead',
                'manager'
            ])->nullable();

            $table->date('application_deadline')->nullable();

            // Fixed: timestamps() cannot accept a column name
            $table->timestamp('posted_date')->nullable();

            // Company Info
            $table->string('company_name', 255)->nullable();

            $table->text('company_description')->nullable();

            $table->string('contact_person')->nullable();

            $table->string('company_email')->nullable();

            $table->string('department')->nullable();

            $table->string('website', 255)->nullable();

            // Status Fields
            $table->boolean('status')->default(false);

            $table->boolean('archive')->default(false);

            // created_at & updated_at
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_listings');
    }
};
