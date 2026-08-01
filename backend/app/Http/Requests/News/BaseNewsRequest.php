<?php

namespace App\Http\Requests\News;

use Illuminate\Foundation\Http\FormRequest;

abstract class BaseNewsRequest extends FormRequest
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
                'max:2048',
            ],

            'content' => [
                'required',
                'string',
            ],

            'category' => [
                'required',
                'string',
                'max:100',
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
     * Custom Messages.
     */
    public function messages(): array
    {
        return [

            'title.required' => 'Judul berita wajib diisi.',

            'thumbnail.image' => 'Thumbnail harus berupa gambar.',

            'thumbnail.mimes' => 'Thumbnail harus berformat JPG, JPEG, PNG, atau WEBP.',

            'thumbnail.max' => 'Ukuran thumbnail maksimal 2 MB.',

            'content.required' => 'Isi berita wajib diisi.',

            'category.required' => 'Kategori berita wajib diisi.',

            'status.required' => 'Status berita wajib dipilih.',

            'status.in' => 'Status hanya boleh draft atau published.',

        ];
    }

    /**
     * Custom Attributes.
     */
    public function attributes(): array
    {
        return [

            'title' => 'Judul',

            'thumbnail' => 'Thumbnail',

            'content' => 'Isi Berita',

            'category' => 'Kategori',

            'status' => 'Status',

            'published_at' => 'Tanggal Publish',

        ];
    }
}