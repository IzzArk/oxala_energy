<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Contact;
use App\Models\AnnualReport;
use App\Models\GovernanceDocument;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'news' => News::count(),
                'contacts' => Contact::count(),
                'annualReports' => AnnualReport::count(),
                'governanceDocuments' => GovernanceDocument::count(),
            ],
        ]);
    }
}
