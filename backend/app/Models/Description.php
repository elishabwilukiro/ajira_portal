<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Description extends Model
{
    protected $table = 'descriptions';
    protected $primaryKey = 'id';
    protected $fillable = [
        'job_listing_id',
        'key_role',
        'responsibility',
        'skill_and_experience',
    ];

    // Relationship
    public function jobListing()
    {
        return $this->belongTo(JobListing::class,'job_listing_id','id');
    }
}
