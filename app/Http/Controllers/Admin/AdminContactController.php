<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Inertia\Inertia;

class AdminContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::latest()->get();

        return Inertia::render(
            'Admin/Contacts/Index',
            [
                'unreadCount' => Contact::where('is_read', false)->count(),
                'contacts' => $contacts
            ]
        );
    }

    public function show(Contact $contact)
    {
        $contact->update([
            'is_read' => true
        ]);

        return Inertia::render(
            'Admin/Contacts/Show',
            [
                'contact' => $contact
            ]
        );
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect()
            ->route('contacts.index')
            ->with('Success', 'Pesan berhasil dihapus');
    }
}
