<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\GovernanceDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class GovernanceDocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $documents = GovernanceDocument::orderBy('sort_order', 'desc')
            ->latest()
            ->get();

        return Inertia::render('Admin/GovernanceDocuments/Index', [
            'documents' => $documents,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/GovernanceDocuments/Create');
    }

    /**
     * Store a newly created resource.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'file'        => 'required|mimes:pdf|max:10240',
            'sort_order'  => 'nullable|integer',
            'is_active'   => 'boolean',
        ]);

        $file = $request->file('file');

        // Nama file berdasarkan title + timestamp
        $filename = Str::slug($request->title)
            . '-'
            . time()
            . '.'
            . $file->getClientOriginalExtension();

        $path = $file->storeAs(
            'governance-documents',
            $filename,
            'public'
        );

        GovernanceDocument::create([
            'title'       => $request->title,
            'category'    => $request->category,
            'description' => $request->description,
            'file'        => $path,
            'sort_order'  => $request->sort_order ?? 0,
            'is_active'   => $request->boolean('is_active'),
        ]);

        return redirect()
            ->route('governance-documents.index')
            ->with('success', 'Dokumen berhasil ditambahkan.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GovernanceDocument $governanceDocument)
    {
        return Inertia::render('Admin/GovernanceDocuments/Edit', [
            'document' => $governanceDocument,
        ]);
    }

    /**
     * Update the specified resource.
     */
    public function update(
        Request $request,
        GovernanceDocument $governanceDocument
    ) {
        $request->validate([
            'title'       => 'required|string|max:255',
            'category'    => 'required|string|max:255',
            'description' => 'nullable|string',
            'file'        => 'nullable|mimes:pdf|max:10240',
            'sort_order'  => 'nullable|integer',
            'is_active'   => 'boolean',
        ]);

        $data = [
            'title'       => $request->title,
            'category'    => $request->category,
            'description' => $request->description,
            'sort_order'  => $request->sort_order ?? 0,
            'is_active'   => $request->boolean('is_active'),
        ];

        if ($request->hasFile('file')) {

            // Hapus file lama
            if (
                $governanceDocument->file &&
                Storage::disk('public')->exists($governanceDocument->file)
            ) {
                Storage::disk('public')->delete(
                    $governanceDocument->file
                );
            }

            $file = $request->file('file');

            // Nama file berdasarkan title + timestamp
            $filename = Str::slug($request->title)
                . '-'
                . time()
                . '.'
                . $file->getClientOriginalExtension();

            $data['file'] = $file->storeAs(
                'governance-documents',
                $filename,
                'public'
            );
        }

        $governanceDocument->update($data);

        return redirect()
            ->route('governance-documents.index')
            ->with('success', 'Dokumen berhasil diperbarui.');
    }

    /**
     * Remove the specified resource.
     */
    public function destroy(GovernanceDocument $governanceDocument)
    {
        if (
            $governanceDocument->file &&
            Storage::disk('public')->exists($governanceDocument->file)
        ) {
            Storage::disk('public')->delete(
                $governanceDocument->file
            );
        }

        $governanceDocument->delete();

        return redirect()
            ->route('governance-documents.index')
            ->with('success', 'Dokumen berhasil dihapus.');
    }
}
