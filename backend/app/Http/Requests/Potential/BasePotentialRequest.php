<?php

namespace App\Http\Requests\Potential;

use Illuminate\Foundation\Http\FormRequest;

abstract class BasePotentialRequest extends FormRequest
{
    /**
     * Determine whether the user is authorized.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Validation Rules.
     */
    public function rules(): array
    {
        return [

            /*
            |--------------------------------------------------------------------------
            | Informasi Potensi
            |--------------------------------------------------------------------------
            */

            'title' => [
                'required',
                'string',
                'max:255',
            ],

            'category' => [
                'required',
                'string',
                'max:100',
            ],

            'excerpt' => [
                'required',
                'string',
            ],

            /*
            |--------------------------------------------------------------------------
            | Foto Potensi
            |--------------------------------------------------------------------------
            */

            'thumbnail' => [
                'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:4096',
            ],

            'cover_image' => [
                'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:4096',
            ],

            /*
            |--------------------------------------------------------------------------
            | Status Publikasi
            |--------------------------------------------------------------------------
            */

            'status' => [
                'required',
                'in:draft,published',
            ],

        ];
    }

    /**
     * Validation Messages.
     */
    public function messages(): array
    {
        return [

            /*
            |--------------------------------------------------------------------------
            | Informasi Potensi
            |--------------------------------------------------------------------------
            */

            'title.required' =>
                'Judul potensi wajib diisi.',

            'category.required' =>
                'Kategori wajib diisi.',

            'excerpt.required' =>
                'Deskripsi wajib diisi.',

            /*
            |--------------------------------------------------------------------------
            | Foto
            |--------------------------------------------------------------------------
            */

            'thumbnail.image' =>
                'Foto asli harus berupa gambar.',

            'thumbnail.mimes' =>
                'Foto asli harus berformat JPG, JPEG, PNG, atau WEBP.',

            'thumbnail.max' =>
                'Ukuran foto asli maksimal 4 MB.',

            'cover_image.image' =>
                'Foto cover harus berupa gambar.',

            'cover_image.mimes' =>
                'Foto cover harus berformat JPG, JPEG, PNG, atau WEBP.',

            'cover_image.max' =>
                'Ukuran foto cover maksimal 4 MB.',

            /*
            |--------------------------------------------------------------------------
            | Status
            |--------------------------------------------------------------------------
            */

            'status.required' =>
                'Status publikasi wajib dipilih.',

            'status.in' =>
                'Status publikasi hanya boleh draft atau published.',

        ];
    }

    /**
     * Attribute Names.
     */
    public function attributes(): array
    {
        return [

            'title' =>
                'Judul Potensi',

            'category' =>
                'Kategori',

            'excerpt' =>
                'Deskripsi',

            'thumbnail' =>
                'Foto Asli',

            'cover_image' =>
                'Foto Cover',

            'status' =>
                'Status Publikasi',

        ];
    }
}