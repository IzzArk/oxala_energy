<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'content',
        'thumbnail',
        'author',
        'is_published',
        'published_at',
    ];

    public function images()
    {
        return $this->hasMany(NewsImage::class);
    }
}
