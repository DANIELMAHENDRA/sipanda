<?php

namespace App\Http\Requests\Setting;

use Illuminate\Foundation\Http\FormRequest;

abstract class BaseSettingRequest extends FormRequest
{
    /**
     * Determine whether the user is authorized.
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
            | Website
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
                'file',
                'image',
                'mimes:jpg,jpeg,png,webp,svg',
                'max:2048',
            ],

            'favicon' => [
                'nullable',
                'file',
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
                'regex:/^[0-9+\-\s()]+$/',
                'max:30',
            ],

            'address' => [
                'nullable',
                'string',
            ],

            'google_maps_embed' => [
                'nullable',
                'string',
            ],

            /*
            |--------------------------------------------------------------------------
            | Social Media
            |--------------------------------------------------------------------------
            */

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

            'x' => [
                'nullable',
                'url',
                'max:255',
            ],

            'whatsapp' => [
                'nullable',
                'regex:/^[0-9+\-\s()]+$/',
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
            | System
            |--------------------------------------------------------------------------
            */

            'maintenance_mode' => [
                'nullable',
                'boolean',
            ],

            'maintenance_message' => [
                'nullable',
                'string',
            ],
        ];
    }

    /**
     * Custom Messages
     */
    public function messages(): array
    {
        return [

            'site_name.required' => 'Nama website wajib diisi.',

            'logo.image' => 'Logo harus berupa gambar.',
            'logo.mimes' => 'Logo harus berformat JPG, JPEG, PNG, WEBP, atau SVG.',
            'logo.max' => 'Ukuran logo maksimal 2 MB.',

            'favicon.image' => 'Favicon harus berupa gambar.',
            'favicon.mimes' => 'Favicon harus berformat PNG atau ICO.',
            'favicon.max' => 'Ukuran favicon maksimal 1 MB.',

            'email.email' => 'Format email tidak valid.',

            'phone.regex' => 'Nomor telepon tidak valid.',

            'facebook.url' => 'URL Facebook tidak valid.',
            'instagram.url' => 'URL Instagram tidak valid.',
            'youtube.url' => 'URL YouTube tidak valid.',
            'tiktok.url' => 'URL TikTok tidak valid.',
            'x.url' => 'URL X tidak valid.',

            'whatsapp.regex' => 'Nomor WhatsApp tidak valid.',

            'maintenance_mode.boolean' => 'Maintenance mode harus bernilai true atau false.',
        ];
    }

    /**
     * Custom Attributes
     */
    public function attributes(): array
    {
        return [

            'site_name' => 'Nama Website',
            'site_tagline' => 'Tagline Website',
            'logo' => 'Logo',
            'favicon' => 'Favicon',

            'meta_title' => 'Meta Title',
            'meta_description' => 'Meta Description',
            'meta_keywords' => 'Meta Keywords',

            'email' => 'Email',
            'phone' => 'Nomor Telepon',
            'address' => 'Alamat',
            'google_maps_embed' => 'Google Maps',

            'facebook' => 'Facebook',
            'instagram' => 'Instagram',
            'youtube' => 'YouTube',
            'tiktok' => 'TikTok',
            'x' => 'X',
            'whatsapp' => 'WhatsApp',

            'footer_description' => 'Deskripsi Footer',
            'copyright' => 'Copyright',

            'maintenance_mode' => 'Mode Maintenance',
            'maintenance_message' => 'Pesan Maintenance',
        ];
    }
}