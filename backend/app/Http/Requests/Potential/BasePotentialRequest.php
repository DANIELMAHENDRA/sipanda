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

            'title' => [
                'required',
                'string',
                'max:255',
            ],

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

            'category' => [
                'required',
                'string',
                'max:100',
            ],

            'excerpt' => [
                'nullable',
                'string',
            ],

            'content' => [
                'required',
                'string',
            ],

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

            'quote' => [
                'nullable',
                'string',
            ],

            'quote_author' => [
                'nullable',
                'string',
                'max:255',
            ],

            'is_featured' => [
                'nullable',
                'boolean',
            ],

            'status' => [
                'required',
                'in:draft,published',
            ],

            'published_at' => [
                'nullable',
                'date',
            ],

        ];
    }

    /**
     * Validation Messages.
     */
    public function messages(): array
    {
        return [

            'title.required' => 'Judul potensi wajib diisi.',

            'thumbnail.image' => 'Thumbnail harus berupa gambar.',

            'thumbnail.mimes' => 'Thumbnail harus berformat JPG, JPEG, PNG, atau WEBP.',

            'thumbnail.max' => 'Ukuran thumbnail maksimal 4 MB.',

            'cover_image.image' => 'Cover harus berupa gambar.',

            'cover_image.mimes' => 'Cover harus berformat JPG, JPEG, PNG, atau WEBP.',

            'cover_image.max' => 'Ukuran cover maksimal 4 MB.',

            'category.required' => 'Kategori wajib diisi.',

            'content.required' => 'Isi potensi wajib diisi.',

            'status.required' => 'Status wajib dipilih.',

            'status.in' => 'Status hanya boleh draft atau published.',

            'published_at.date' => 'Tanggal publish tidak valid.',

        ];
    }

    /**
     * Attribute Names.
     */
    public function attributes(): array
    {
        return [

            'title' => 'Judul',

            'thumbnail' => 'Thumbnail',

            'cover_image' => 'Cover',

            'category' => 'Kategori',

            'excerpt' => 'Ringkasan',

            'content' => 'Isi',

            'statistic_1_title' => 'Judul Statistik 1',

            'statistic_1_value' => 'Nilai Statistik 1',

            'statistic_2_title' => 'Judul Statistik 2',

            'statistic_2_value' => 'Nilai Statistik 2',

            'statistic_3_title' => 'Judul Statistik 3',

            'statistic_3_value' => 'Nilai Statistik 3',

            'quote' => 'Quote',

            'quote_author' => 'Penulis Quote',

            'published_at' => 'Tanggal Publish',

        ];
    }
}