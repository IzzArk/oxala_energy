<?php

namespace App\Http\Middleware;

use App\Models\Contact;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'generalUnreadCount' => fn() => Contact::where(
                'category',
                'general'
            )
                ->where('is_read', false)
                ->count(),

            'renewableUnreadCount' => fn() => Contact::where(
                'category',
                'renewable-energy'
            )
                ->where('is_read', false)
                ->count(),
            'settings' => fn() =>
            Setting::pluck('value', 'key'),
        ];
    }
}
