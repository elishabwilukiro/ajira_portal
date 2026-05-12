<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AppliedJob extends Model
{
    protected $table = 'applied_jobs';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id',
        'job_id',
        'first_name',
        'last_name',
        'email',
        'phone',
        'linkedin',
        'status',
        'archive',
        'resume',
    ];

    // Relationship
    public function job()
    {
        return $this->belongTo(JobListing::class,'job_id', 'id');
    }
    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
}
