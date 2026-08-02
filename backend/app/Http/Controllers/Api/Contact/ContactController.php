<?php

namespace App\Http\Controllers\Api\Contact;

use App\Http\Controllers\Controller;
use App\Http\Requests\Contact\UpdateContactRequest;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    /**
     * Display contact information.
     */
    public function index(): JsonResponse
    {
        $contact = Contact::first();

        if (! $contact) {

            $contact = Contact::create([
                'address' => '',
            ]);

        }

        return response()->json([
            'success' => true,
            'message' => 'Informasi kontak berhasil diambil.',
            'data' => new ContactResource($contact),
        ]);
    }

    /**
     * Update contact information.
     */
    public function update(UpdateContactRequest $request): JsonResponse
    {
        $contact = Contact::first();

        if (! $contact) {

            $contact = Contact::create([
                'address' => '',
            ]);

        }

        $contact->update($request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Informasi kontak berhasil diperbarui.',
            'data' => new ContactResource($contact),
        ]);
    }
}