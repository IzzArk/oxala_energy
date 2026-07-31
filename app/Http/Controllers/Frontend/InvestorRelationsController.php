<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\AnnualReport;
use App\Models\InvestorCalendar;
use Carbon\Carbon;
use Inertia\Inertia;

class InvestorRelationsController extends Controller
{
    public function index()
    {
        $reports = AnnualReport::where('is_active', true)
            ->orderByDesc('year')
            ->get();

        $events = InvestorCalendar::orderBy('event_date', 'asc')
            ->get()
            ->map(function ($item) {
                $item->formatted_date = Carbon::parse($item->event_date)
                    ->translatedFormat('d F Y');

                return $item;
            });

        return Inertia::render('InvestorRelations', [
            'reports' => $reports,
            'events' => $events,
        ]);
    }
}
