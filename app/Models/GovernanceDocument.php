<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GovernanceDocument extends Model
{
    protected $fillable = [
        'title',
        'category',
        'description',
        'file',
        'sort_order',
        'is_active',
    ];
}
