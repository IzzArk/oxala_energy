<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\News;
use App\Models\GovernanceDocument;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $banners = Banner::where('is_active', true)
            ->orderBy('sort_order')
            ->get();

        $news = News::latest()
            ->latest()
            ->take(3)
            ->get();

        $documents = GovernanceDocument::where('is_active', true)
            ->orderByDesc('sort_order')
            ->take(3)
            ->get();

        return Inertia::render('Home', [
            'banners' => $banners,
            'news' => $news,
            'documents' => $documents,
        ]);
    }
}
