<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\News;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::latest()
            ->paginate(9);

        return Inertia::render('News/Index', [
            'news' => $news
        ]);
    }

    public function show($slug)
    {
        $news = News::with('images')
            ->where('slug', $slug)
            ->firstOrFail();

        return Inertia::render('News/Show', [
            'news' => $news
        ]);
    }
}
