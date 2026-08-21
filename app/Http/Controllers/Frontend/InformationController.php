<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\GovernanceDocument;
use Inertia\Inertia;

class InformationController extends Controller
{
    public function index()
    {
        $documents = GovernanceDocument::where('is_active', true)
            ->orderBy('sort_order', 'desc')
            ->get();

        return Inertia::render('InformationDisclosure', [
            'documents' => $documents
        ]);
    }
}
