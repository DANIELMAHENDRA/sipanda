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

            'content' => [
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
            | Statistik
            |--------------------------------------------------------------------------
            */

            'statistic_1_title' => [
                'nullable',
                'string',
                'max:255',
            ],

            'statistic_1_value' => [
                'nullable',
                'string',
                'max:255',
            ],

            'statistic_2_title' => [
                'nullable',
                'string',
                'max:255',
            ],

            'statistic_2_value' => [
                'nullable',
                'string',
                'max:255',
            ],

            'statistic_3_title' => [
                'nullable',
                'string',
                'max:255',
            ],

            'statistic_3_value' => [
                'nullable',
                'string',
                'max:255',
            ],


            /*
            |--------------------------------------------------------------------------
            | Quote
            |--------------------------------------------------------------------------
            */

            'quote' => [
                'nullable',
                'string',
            ],

            'quote_author' => [
                'nullable',
                'string',
                'max:255',
            ],


            /*
            |--------------------------------------------------------------------------
            | Highlight
            |--------------------------------------------------------------------------
            */

            'is_featured' => [
                'nullable',
                'boolean',
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

            'title.max' => 
                'Judul potensi maksimal 255 karakter.',

            'category.required' => 
                'Kategori wajib diisi.',

            'category.max' => 
                'Kategori maksimal 100 karakter.',

            'excerpt.required' => 
                'Deskripsi singkat wajib diisi.',

            'content.required' => 
                'Isi potensi wajib diisi.',


            /*
            |--------------------------------------------------------------------------
            | Foto
            |--------------------------------------------------------------------------
            */

            'thumbnail.image' => 
                'Thumbnail harus berupa gambar.',

            'thumbnail.mimes' => 
                'Thumbnail harus berformat JPG, JPEG, PNG, atau WEBP.',

            'thumbnail.max' => 
                'Ukuran thumbnail maksimal 4 MB.',

            'cover_image.image' => 
                'Foto cover harus berupa gambar.',

            'cover_image.mimes' => 
                'Foto cover harus berformat JPG, JPEG, PNG, atau WEBP.',

            'cover_image.max' => 
                'Ukuran foto cover maksimal 4 MB.',


            /*
            |--------------------------------------------------------------------------
            | Highlight
            |--------------------------------------------------------------------------
            */

            'is_featured.boolean' => 
                'Status highlight harus berupa nilai true atau false.',


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
                'Deskripsi Singkat',

            'content' => 
                'Isi Potensi',

            'thumbnail' => 
                'Thumbnail',

            'cover_image' => 
                'Foto Cover',

            'statistic_1_title' => 
                'Judul Statistik 1',

            'statistic_1_value' => 
                'Nilai Statistik 1',

            'statistic_2_title' => 
                'Judul Statistik 2',

            'statistic_2_value' => 
                'Nilai Statistik 2',

            'statistic_3_title' => 
                'Judul Statistik 3',

            'statistic_3_value' => 
                'Nilai Statistik 3',

            'quote' => 
                'Quote',

            'quote_author' => 
                'Penulis Quote',

            'is_featured' => 
                'Highlight',

            'status' => 
                'Status Publikasi',

        ];
    }
}