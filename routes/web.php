<?php

use App\Http\Controllers\Admin\AdminContactController;
use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\GovernanceDocumentController;
use App\Http\Controllers\Admin\InvestorCalendarController;
use App\Http\Controllers\Admin\LeadershipController;
use App\Http\Controllers\Admin\NewsControllerAdmin;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Frontend\AboutController;
use App\Http\Controllers\Frontend\NewsController;
use App\Http\Controllers\Frontend\InvestorRelationsController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\InformationController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [HomeController::class, 'index']);

Route::get('/tentang-kami', [AboutController::class, 'index']);

Route::get('/hubungan-investor', [InvestorRelationsController::class, 'index']);

Route::get('/keterbukaan-informasi', [InformationController::class, 'index']);

Route::get('/produk', function () {
    return Inertia::render('Products');
});

Route::get('/berita', [NewsController::class, 'index']);
Route::get('/berita/{slug}', [NewsController::class, 'show']);

Route::get('/hubungi-kami', function () {
    return Inertia::render('Contact');
});

Route::post(
    '/contact',
    [ContactController::class, 'store']
);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware(['auth'])->group(function () {

    Route::get(
        '/admin/dashboard',
        [DashboardController::class, 'index']
    )->name('admin.dashboard');
});

Route::get('/profile', function () {
    return Inertia::render('Profile/Edit');
})->name('profile.edit');

Route::middleware(['auth'])->prefix('admin')->group(function () {

    Route::resource(
        'banner',
        BannerController::class
    );
});


Route::middleware(['auth'])
    ->prefix('admin')
    ->group(function () {

        Route::resource(
            'news',
            NewsControllerAdmin::class
        );
    });

Route::prefix('admin')
    ->middleware(['auth'])
    ->group(function () {

        Route::get(
            '/contacts/general',
            [AdminContactController::class, 'general']
        )->name('contacts.general');

        Route::get(
            '/contacts/renewable-energy',
            [AdminContactController::class, 'renewable']
        )->name('contacts.renewable-energy');

        Route::get(
            '/contacts/{contact}',
            [AdminContactController::class, 'show']
        )->name('contacts.show');

        Route::delete(
            '/contacts/{contact}',
            [AdminContactController::class, 'destroy']
        )->name('contacts.destroy');
    });

Route::prefix('admin')
    ->middleware(['auth'])
    ->group(function () {

        Route::resource(
            'annual-reports',
            \App\Http\Controllers\Admin\AnnualReportController::class
        )->except('show');
    });


Route::prefix('admin')
    ->middleware(['auth'])
    ->group(function () {

        Route::resource(
            'governance-documents',
            GovernanceDocumentController::class
        )->except('show');
    });

Route::middleware(['auth'])
    ->prefix('admin')
    ->group(function () {

        Route::resource(
            'investor-calendar',
            InvestorCalendarController::class
        );
    });


Route::prefix('admin')
    ->name('admin.')
    ->group(function () {

        Route::resource(
            'leadership',
            LeadershipController::class
        );
    });

require __DIR__ . '/auth.php';
