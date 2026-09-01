<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminSettingController extends Controller
{
    public function index()
    {
        $settings = Setting::pluck('value', 'key');

        return Inertia::render(
            'Admin/Settings/Index',
            [
                'settings' => $settings,
            ]
        );
    }

    public function update(Request $request)
    {
        $request->validate([
            'company_name' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:50',
            'address' => 'nullable|string',
            'logo' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $fields = [
            'company_name',
            'email',
            'phone',
            'address',
            'youtube',
        ];

        foreach ($fields as $field) {

            Setting::updateOrCreate(
                ['key' => $field],
                ['value' => $request->input($field)]
            );
        }

        if ($request->hasFile('logo')) {

            $oldLogo = Setting::where('key', 'logo')->value('value');

            if ($oldLogo && Storage::disk('public')->exists($oldLogo)) {
                Storage::disk('public')->delete($oldLogo);
            }

            $logo = $request->file('logo')->store(
                'settings',
                'public'
            );

            Setting::updateOrCreate(
                ['key' => 'logo'],
                ['value' => $logo]
            );
        }

        return back()->with(
            'success',
            'General settings berhasil diperbarui.'
        );
    }
}
