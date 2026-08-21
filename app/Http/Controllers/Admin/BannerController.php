<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BannerController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Banner/Index', [
            'banners' => Banner::latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Banner/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'image' => 'required|image|max:5120',
        ]);

        $image = null;

        if ($request->hasFile('image')) {

            $file = $request->file('image');

            // Buat nama file dari title
            $fileName = $this->generateFileName(
                $request->title,
                $file->getClientOriginalExtension()
            );

            // Simpan ke storage/app/public/banners
            $file->storeAs(
                'banners',
                $fileName,
                'public'
            );

            // Yang disimpan ke database
            $image = 'banners/' . $fileName;
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
        return Inertia::render('Admin/Banner/Edit', [
            'banner' => $banner
        ]);
    }

    public function update(Request $request, Banner $banner)
    {
        $request->validate([
            'title' => 'required|max:255',
            'image' => 'nullable|image|max:5120',
            'is_active' => 'boolean',
        ]);

        $image = $banner->image;

        if ($request->hasFile('image')) {

            // Hapus gambar lama
            if ($banner->image) {
                Storage::disk('public')->delete($banner->image);
            }

            $file = $request->file('image');

            // Nama file baru berdasarkan title
            $fileName = $this->generateFileName(
                $request->title,
                $file->getClientOriginalExtension()
            );

            // Simpan ke storage/app/public/banners
            $file->storeAs(
                'banners',
                $fileName,
                'public'
            );

            // Simpan path relatif ke database
            $image = 'banners/' . $fileName;
        }

        $banner->update([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'description' => $request->description,
            'button_text' => $request->button_text,
            'button_link' => $request->button_link,
            'is_active' => $request->boolean('is_active'),
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

    /**
     * Membuat nama file berdasarkan title.
     */
    private function generateFileName(string $title, string $extension): string
    {
        $slug = \Illuminate\Support\Str::slug($title);

        return $slug . '-' . time() . '.' . $extension;
    }
}
