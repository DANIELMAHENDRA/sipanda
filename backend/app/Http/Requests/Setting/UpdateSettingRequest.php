<?php

namespace App\Http\Requests\Setting;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSettingRequest extends FormRequest
{
    /**
     * Determine whether the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Validation Rules
     */
    public function rules(): array
    {
        return [

            /*
            |--------------------------------------------------------------------------
            | General Website
            |--------------------------------------------------------------------------
            */

            'site_name' => [
                'required',
                'string',
                'max:255',
            ],

            'site_tagline' => [
                'nullable',
                'string',
                'max:255',
            ],

            'logo' => [
                'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp,svg',
                'max:2048',
            ],

            'favicon' => [
                'nullable',
                'image',
                'mimes:png,ico',
                'max:1024',
            ],

            /*
            |--------------------------------------------------------------------------
            | SEO
            |--------------------------------------------------------------------------
            */

            'meta_title' => [
                'nullable',
                'string',
                'max:255',
            ],

            'meta_description' => [
                'nullable',
                'string',
            ],

            'meta_keywords' => [
                'nullable',
                'string',
                'max:255',
            ],

            /*
            |--------------------------------------------------------------------------
            | Contact
            |--------------------------------------------------------------------------
            */

            'email' => [
                'nullable',
                'email',
                'max:255',
            ],

            'phone' => [
                'nullable',
                'string',
                'max:30',
            ],

            /*
            |--------------------------------------------------------------------------
            | Footer
            |--------------------------------------------------------------------------
            */

            'footer_description' => [
                'nullable',
                'string',
            ],

            'copyright' => [
                'nullable',
                'string',
                'max:255',
            ],

            /*
            |--------------------------------------------------------------------------
            | Status
            |--------------------------------------------------------------------------
            */

            'maintenance_mode' => [
                'nullable',
                'boolean',
            ],
        ];
    }

    /**
     * Custom Validation Messages
     */
    public function messages(): array
    {
        return [

            'site_name.required' => 'Nama website wajib diisi.',
            'site_name.max' => 'Nama website maksimal 255 karakter.',

            'site_tagline.max' => 'Tagline website maksimal 255 karakter.',

            'logo.image' => 'Logo harus berupa gambar.',
            'logo.mimes' => 'Logo harus berformat JPG, JPEG, PNG, WEBP, atau SVG.',
            'logo.max' => 'Ukuran logo maksimal 2 MB.',

            'favicon.image' => 'Favicon harus berupa gambar.',
            'favicon.mimes' => 'Favicon harus berformat PNG atau ICO.',
            'favicon.max' => 'Ukuran favicon maksimal 1 MB.',

            'meta_title.max' => 'Meta Title maksimal 255 karakter.',

            'meta_keywords.max' => 'Meta Keywords maksimal 255 karakter.',

            'email.email' => 'Format email tidak valid.',
            'email.max' => 'Email maksimal 255 karakter.',

            'phone.max' => 'Nomor telepon maksimal 30 karakter.',

            'copyright.max' => 'Copyright maksimal 255 karakter.',

            'maintenance_mode.boolean' => 'Maintenance Mode harus bernilai true atau false.',
        ];
    }

    /**
     * Custom Attribute Names
     */
    public function attributes(): array
    {
        return [

            'site_name' => 'Nama Website',

            'site_tagline' => 'Tagline Website',

            'logo' => 'Logo Website',

            'favicon' => 'Favicon',

            'meta_title' => 'Meta Title',

            'meta_description' => 'Meta Description',

            'meta_keywords' => 'Meta Keywords',

            'email' => 'Email',

            'phone' => 'Nomor Telepon',

            'footer_description' => 'Deskripsi Footer',

            'copyright' => 'Copyright',

            'maintenance_mode' => 'Mode Maintenance',
        ];
    }
}