<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class NewsControllerAdmin extends Controller
{
    public function index()
    {
        $news = News::orderBy('created_at', 'desc')

            ->get()
            ->map(function ($item) {

                $item->formatted_date =
                    Carbon::parse($item->published_at)
                    ->translatedFormat('d F Y');

                return $item;
            });
        return Inertia::render(
            'Admin/News/Index',
            [
                'news' => $news
            ]
        );
    }

    public function create()
    {
        return Inertia::render(
            'Admin/News/Create'
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'published_at' => 'required|date',
            'thumbnail' => 'nullable|image',
            'images.*' => 'image|max:4096',
        ]);

        $thumbnail = null;

        if ($request->hasFile('thumbnail')) {

            $thumbnail = $request
                ->file('thumbnail')
                ->store('news', 'public');
        }

        $news = News::create([

            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
            'thumbnail' => $thumbnail,
            'author' => auth()->user()->name,
            'is_published' => true,
            'published_at' => $request->published_at,

        ]);

        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $image) {

                $path = $image->store('news', 'public');

                $news->images()->create([
                    'image' => $path
                ]);
            }
        }

        return redirect()->route('news.index');
    }

    public function edit(News $news)
    {
        $news->load('images');

        return Inertia::render(
            'Admin/News/Edit',
            [
                'news' => $news
            ]
        );
    }

    public function update(
        Request $request,
        News $news
    ) {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'published_at' => 'required|date',
            'images.*' => 'image|max:4096',
        ]);

        $thumbnail = $news->thumbnail;

        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $image) {

                $path = $image->store('news', 'public');

                $news->images()->create([
                    'image' => $path
                ]);
            }
        }

        $news->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
            'thumbnail' => $thumbnail,
            'published_at' => $request->published_at
        ]);

        return redirect()
            ->route('news.index')
            ->with(
                'success',
                'Berita berhasil diperbarui'
            );
    }

    public function destroy(News $news)
    {
        foreach ($news->images as $image) {

            Storage::disk('public')->delete($image->image);
        }

        if ($news->thumbnail) {

            Storage::disk('public')->delete($news->thumbnail);
        }

        $news->delete();

        return redirect()
            ->route('news.index')
            ->with(
                'success',
                'Berita berhasil dihapus'
            );
    }
}
