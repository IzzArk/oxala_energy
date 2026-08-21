<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'category' => 'required|in:general,renewable-energy',
            'subject' => 'required',
            'message' => 'required',
        ]);

        Contact::create($request->all());

        return back()->with(
            'success',
            'Pesan berhasil dikirim'
        );
    }
}
