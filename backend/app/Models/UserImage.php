<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserImage extends Model
{
    protected $table = 'user_images';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id',
        'image_path',
    ];

    // Relationship
    public function user()
    {
        return $this->belongTo(User::class,'user_id','id');
    }
}
