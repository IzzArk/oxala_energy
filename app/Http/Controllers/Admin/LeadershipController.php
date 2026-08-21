<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Leadership;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class LeadershipController extends Controller
{
    public function index()
    {
        $leaders = Leadership::orderBy('sort_order')
            ->latest()
            ->get();

        return Inertia::render('Admin/Leadership/Index', [
            'leaders' => $leaders,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Leadership/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',

            'position' => 'required|string|max:255',

            'photo' => [
                'required',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:5120',
            ],

            'is_active' => 'boolean',

            'sort_order' => 'nullable|integer',
        ]);

        $photo = null;

        if ($request->hasFile('photo')) {
            $file = $request->file('photo');

            $filename = 'leadership-' .
                str()->slug($request->name) .
                '-' .
                time() .
                '.' .
                $file->getClientOriginalExtension();

            $photo = $file->storeAs(
                'leadership',
                $filename,
                'public'
            );
        }

        Leadership::create([
            'name' => $request->name,
            'position' => $request->position,
            'photo' => $photo,
            'is_active' => $request->boolean('is_active'),
            'sort_order' => $request->sort_order ?? 0,
        ]);

        return redirect()
            ->route('admin.leadership.index')
            ->with('success', 'Data leadership berhasil ditambahkan.');
    }

    public function edit(Leadership $leadership)
    {
        return Inertia::render('Admin/Leadership/Edit', [
            'leader' => $leadership,
        ]);
    }

    public function update(
        Request $request,
        Leadership $leadership
    ) {
        $request->validate([
            'name' => 'required|string|max:255',

            'position' => 'required|string|max:255',

            'photo' => [
                'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:5120',
            ],

            'is_active' => 'boolean',

            'sort_order' => 'nullable|integer',
        ]);

        $data = [
            'name' => $request->name,
            'position' => $request->position,
            'is_active' => $request->boolean('is_active'),
            'sort_order' => $request->sort_order ?? 0,
        ];

        if ($request->hasFile('photo')) {

            if (
                $leadership->photo &&
                Storage::disk('public')->exists($leadership->photo)
            ) {
                Storage::disk('public')
                    ->delete($leadership->photo);
            }

            $file = $request->file('photo');

            $filename = 'leadership-' .
                str()->slug($request->name) .
                '-' .
                time() .
                '.' .
                $file->getClientOriginalExtension();

            $data['photo'] = $file->storeAs(
                'leadership',
                $filename,
                'public'
            );
        }

        $leadership->update($data);

        return redirect()
            ->route('admin.leadership.index')
            ->with('success', 'Data leadership berhasil diperbarui.');
    }

    public function destroy(Leadership $leadership)
    {
        if (
            $leadership->photo &&
            Storage::disk('public')->exists($leadership->photo)
        ) {
            Storage::disk('public')
                ->delete($leadership->photo);
        }

        $leadership->delete();

        return redirect()
            ->route('admin.leadership.index')
            ->with('success', 'Data leadership berhasil dihapus.');
    }
}
