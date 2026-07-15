<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobListing extends Model
{
    
    protected $table = 'job_listings';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id',
        'title',
        'location',
        'location_type',
        'min_salary',
        'max_salary',
        'job_type',
        'level',
        'application_deadline',
        'posted_date',
        'company_name',
        'company_description',
        'contact_person',
        'company_email',
        'department',
        'website',
        'status',
        'archive',
    ];

    protected $casts = [
        'application_deadline' => 'datetime',
        'posted_date' => 'datetime',
    ];
    // Relationship
    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
    public function description()
    {
        return $this->hasOne(Description::class);
    }
    public function companyLogo()
    {
        return $this->hasOne(CompanyLogo::class,'job_listing_id','id');
    }
    public function appliedJob()
    {
        return $this->hasMany(AppliedJob::class,'job_id','id');
    }

}
