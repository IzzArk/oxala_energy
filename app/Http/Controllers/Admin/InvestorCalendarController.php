<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\InvestorCalendar;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InvestorCalendarController extends Controller
{

    public function index()
    {
        $events = InvestorCalendar::orderBy('event_date', 'desc')
            ->get()
            ->map(function ($event) {

                $event->formatted_date = Carbon::parse($event->event_date)
                    ->translatedFormat('d F Y');

                return $event;
            });

        return Inertia::render('Admin/InvestorCalendar/Index', [
            'events' => $events,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/InvestorCalendar/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'event_date' => 'required|date',
            'description' => 'nullable|string',
        ]);

        InvestorCalendar::create($validated);

        return redirect()
            ->route('investor-calendar.index')
            ->with('success', 'Agenda berhasil ditambahkan.');
    }

    public function edit(InvestorCalendar $investorCalendar)
    {
        return Inertia::render('Admin/InvestorCalendar/Edit', [
            'event' => $investorCalendar,
        ]);
    }

    public function update(Request $request, InvestorCalendar $investorCalendar)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'event_date' => 'required|date',
            'description' => 'nullable|string',
        ]);

        $investorCalendar->update($validated);

        return redirect()
            ->route('investor-calendar.index')
            ->with('success', 'Agenda berhasil diperbarui.');
    }

    public function destroy(InvestorCalendar $investorCalendar)
    {
        $investorCalendar->delete();

        return redirect()
            ->route('investor-calendar.index')
            ->with('success', 'Agenda berhasil dihapus.');
    }
}
