<?php

namespace App\Http\Requests\Contact;

use Illuminate\Foundation\Http\FormRequest;

class BaseContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Base validation rules.
     */
    protected function baseRules(): array
    {
        return [

            'office_name' => [
                'nullable',
                'string',
                'max:255',
            ],

            'address' => [
                'required',
                'string',
            ],

            'phone' => [
                'nullable',
                'string',
                'max:30',
            ],

            'whatsapp' => [
                'nullable',
                'string',
                'max:30',
            ],

            'email' => [
                'nullable',
                'email',
                'max:255',
            ],

            'website' => [
                'nullable',
                'url',
                'max:255',
            ],

            'facebook' => [
                'nullable',
                'url',
                'max:255',
            ],

            'instagram' => [
                'nullable',
                'url',
                'max:255',
            ],

            'youtube' => [
                'nullable',
                'url',
                'max:255',
            ],

            'tiktok' => [
                'nullable',
                'url',
                'max:255',
            ],

            'google_maps_embed' => [
                'nullable',
                'string',
            ],

            'latitude' => [
                'nullable',
                'numeric',
                'between:-90,90',
            ],

            'longitude' => [
                'nullable',
                'numeric',
                'between:-180,180',
            ],

            'monday_friday' => [
                'nullable',
                'string',
                'max:255',
            ],

            'saturday' => [
                'nullable',
                'string',
                'max:255',
            ],

            'sunday' => [
                'nullable',
                'string',
                'max:255',
            ],

            'is_active' => [
                'nullable',
                'boolean',
            ],

        ];
    }

    /**
     * Custom validation messages.
     */
    public function messages(): array
    {
        return [

            'address.required' => 'Alamat kantor wajib diisi.',

            'email.email' => 'Format email tidak valid.',

            'website.url' => 'Website harus berupa URL yang valid.',

            'facebook.url' => 'Link Facebook tidak valid.',

            'instagram.url' => 'Link Instagram tidak valid.',

            'youtube.url' => 'Link YouTube tidak valid.',

            'tiktok.url' => 'Link TikTok tidak valid.',

            'latitude.numeric' => 'Latitude harus berupa angka.',
            'latitude.between' => 'Latitude harus berada antara -90 sampai 90.',

            'longitude.numeric' => 'Longitude harus berupa angka.',
            'longitude.between' => 'Longitude harus berada antara -180 sampai 180.',

            'is_active.boolean' => 'Status aktif tidak valid.',

        ];
    }
}