<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InvestorCalendar extends Model
{
    protected $fillable = [
        'title',
        'event_date',
        'description',
    ];

    protected $casts = [
        'event_date' => 'date',
    ];
}
