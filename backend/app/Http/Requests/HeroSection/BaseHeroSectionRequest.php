<?php

namespace App\Http\Requests\HeroSection;

use Illuminate\Foundation\Http\FormRequest;

abstract class BaseHeroSectionRequest extends FormRequest
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
            | Hero Content
            |--------------------------------------------------------------------------
            */

            'title' => [
                'required',
                'string',
                'max:255',
            ],

            'subtitle' => [
                'nullable',
                'string',
                'max:255',
            ],

            'description' => [
                'nullable',
                'string',
            ],

            /*
            |--------------------------------------------------------------------------
            | Background
            |--------------------------------------------------------------------------
            */

            'background_image' => [
                'nullable',
                'file',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:4096',
            ],

            /*
            |--------------------------------------------------------------------------
            | Button
            |--------------------------------------------------------------------------
            */

            'button_text' => [
                'nullable',
                'string',
                'max:100',
            ],

            'button_link' => [
                'nullable',
                'string',
                'max:255',
            ],

            /*
            |--------------------------------------------------------------------------
            | Overlay
            |--------------------------------------------------------------------------
            */

            'overlay_color' => [
                'nullable',
                'string',
                'max:20',
            ],

            'overlay_opacity' => [
                'nullable',
                'numeric',
                'between:0,1',
            ],

            /*
            |--------------------------------------------------------------------------
            | Status
            |--------------------------------------------------------------------------
            */

            'is_active' => [
                'nullable',
                'boolean',
            ],

            /*
            |--------------------------------------------------------------------------
            | Order
            |--------------------------------------------------------------------------
            */

            'order_number' => [
                'nullable',
                'integer',
                'min:1',
            ],

        ];
    }

    /**
     * Custom Messages
     */
    public function messages(): array
    {
        return [

            'page.required' => 'Halaman wajib diisi.',

            'title.required' => 'Judul Hero wajib diisi.',

            'background_image.image' => 'Background harus berupa gambar.',

            'background_image.mimes' => 'Background harus berformat JPG, JPEG, PNG, atau WEBP.',

            'background_image.max' => 'Ukuran background maksimal 4 MB.',

            'overlay_opacity.between' => 'Opacity harus bernilai antara 0 sampai 1.',

            'is_active.boolean' => 'Status aktif harus bernilai true atau false.',

            'order_number.integer' => 'Urutan harus berupa angka.',

        ];
    }

    /**
     * Custom Attribute
     */
    public function attributes(): array
    {
        return [

            'page' => 'Halaman',

            'title' => 'Judul Hero',

            'subtitle' => 'Subtitle',

            'description' => 'Deskripsi',

            'background_image' => 'Background Hero',

            'button_text' => 'Teks Tombol',

            'button_link' => 'Link Tombol',

            'overlay_color' => 'Warna Overlay',

            'overlay_opacity' => 'Opacity Overlay',

            'is_active' => 'Status Aktif',

            'order_number' => 'Urutan',

        ];
    }
}