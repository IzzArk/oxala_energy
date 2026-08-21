<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Leadership;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        $leaders = Leadership::where('is_active', true)
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('About', [
            'leaders' => $leaders,
        ]);
    }
}
