<?php

namespace App\Http\Controllers\Admin;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class BannerController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'Admin/Banner/Index',
            [
                'banners' => Banner::latest()->get()
            ]
        );
    }

    public function create()
    {
        return Inertia::render(
            'Admin/Banner/Create'
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'image' => 'required|image|max:5120',
        ]);

        $image = null;

        if ($request->hasFile('image')) {
            $image = $request->file('image')
                ->store('banners', 'public');
        }

        Banner::create([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'description' => $request->description,
            'button_text' => $request->button_text,
            'button_link' => $request->button_link,
            'image' => $image,
            'is_active' => true,
            'sort_order' => 0,
        ]);

        return redirect()
            ->route('banner.index')
            ->with('success', 'Banner berhasil ditambahkan');
    }

    public function edit(Banner $banner)
    {
        return Inertia::render(
            'Admin/Banner/Edit',
            [
                'banner' => $banner
            ]
        );
    }

    public function update(Request $request, Banner $banner)
    {
        $request->validate([
            'title' => 'required|max:255',
        ]);

        $image = $banner->image;

        if ($request->hasFile('image')) {

            if ($banner->image) {
                \Storage::disk('public')
                    ->delete($banner->image);
            }

            $image = $request->file('image')
                ->store('banners', 'public');
        }

        $banner->update([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'description' => $request->description,
            'button_text' => $request->button_text,
            'button_link' => $request->button_link,
            'image' => $image,
        ]);

        return redirect()
            ->route('banner.index')
            ->with('success', 'Banner berhasil diperbarui');
    }

    public function destroy(Banner $banner)
    {
        if ($banner->image) {
            Storage::disk('public')->delete($banner->image);
        }

        $banner->delete();

        return redirect()
            ->route('banner.index')
            ->with('success', 'Banner berhasil dihapus');
    }
}
