<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AnnualReport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AnnualReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reports = AnnualReport::latest()->get();

        return Inertia::render('Admin/AnnualReports/Index', [
            'reports' => $reports,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/AnnualReports/Create');
    }

    /**
     * Store a newly created resource.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'year' => 'required|digits:4',
            'file' => 'required|mimes:pdf|max:10240',
            'is_active' => 'boolean',
        ]);

        $path = $request->file('file')->store('annual-reports', 'public');

        AnnualReport::create([
            'title' => $request->title,
            'year' => $request->year,
            'file' => $path,
            'is_active' => $request->boolean('is_active'),
        ]);

        return redirect()
            ->route('annual-reports.index')
            ->with('success', 'Annual Report berhasil ditambahkan.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AnnualReport $annualReport)
    {
        return Inertia::render('Admin/AnnualReports/Edit', [
            'report' => $annualReport,
        ]);
    }

    /**
     * Update the specified resource.
     */
    public function update(Request $request, AnnualReport $annualReport)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'year' => 'required|digits:4',
            'file' => 'nullable|mimes:pdf|max:10240',
            'is_active' => 'boolean',
        ]);

        $data = [
            'title' => $request->title,
            'year' => $request->year,
            'is_active' => $request->boolean('is_active'),
        ];

        if ($request->hasFile('file')) {

            if (
                $annualReport->file &&
                Storage::disk('public')->exists($annualReport->file)
            ) {
                Storage::disk('public')->delete($annualReport->file);
            }

            $data['file'] = $request
                ->file('file')
                ->store('annual-reports', 'public');
        }

        $annualReport->update($data);

        return redirect()
            ->route('annual-reports.index')
            ->with('success', 'Annual Report berhasil diperbarui.');
    }

    /**
     * Remove the specified resource.
     */
    public function destroy(AnnualReport $annualReport)
    {
        if (
            $annualReport->file &&
            Storage::disk('public')->exists($annualReport->file)
        ) {
            Storage::disk('public')->delete($annualReport->file);
        }

        $annualReport->delete();

        return redirect()
            ->route('annual-reports.index')
            ->with('success', 'Annual Report berhasil dihapus.');
    }
}
