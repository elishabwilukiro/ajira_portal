<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyLogo extends Model
{
    protected $table = 'company_logos';
    protected $primaryKey = 'id';
    protected $fillable = [
        'job_listing_id',
        'original_name',
        'logo_path',
    ];

    // Relationship
    public function jobListing()
    {
        return $this->belongTo(JobListing::class,'job_listing_id', 'id');
    }
}
