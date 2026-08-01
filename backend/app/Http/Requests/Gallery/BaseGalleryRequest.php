<?php

namespace App\Http\Requests\Gallery;

use Illuminate\Foundation\Http\FormRequest;

abstract class BaseGalleryRequest extends FormRequest
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

            'image' => [
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

            'description' => [
                'nullable',
                'string',
            ],

            'location' => [
                'nullable',
                'string',
                'max:255',
            ],

            'photographer' => [
                'nullable',
                'string',
                'max:255',
            ],

            'taken_at' => [
                'nullable',
                'date',
            ],

            'order_number' => [
                'nullable',
                'integer',
                'min:1',
            ],

            'is_featured' => [
                'nullable',
                'boolean',
            ],

            'status' => [
                'required',
                'in:draft,published',
            ],

        ];
    }

    /**
     * Custom Messages.
     */
    public function messages(): array
    {
        return [

            'title.required' => 'Judul galeri wajib diisi.',

            'image.image' => 'File harus berupa gambar.',

            'image.mimes' => 'Gambar harus berformat JPG, JPEG, PNG, atau WEBP.',

            'image.max' => 'Ukuran gambar maksimal 4 MB.',

            'category.required' => 'Kategori wajib diisi.',

            'status.required' => 'Status wajib dipilih.',

            'status.in' => 'Status hanya boleh draft atau published.',

            'taken_at.date' => 'Tanggal kegiatan tidak valid.',

            'order_number.integer' => 'Urutan tampil harus berupa angka.',

        ];
    }

    /**
     * Custom Attributes.
     */
    public function attributes(): array
    {
        return [

            'title' => 'Judul',

            'image' => 'Foto',

            'category' => 'Kategori',

            'description' => 'Deskripsi',

            'location' => 'Lokasi',

            'photographer' => 'Fotografer',

            'taken_at' => 'Tanggal Kegiatan',

            'order_number' => 'Urutan',

            'status' => 'Status',

        ];
    }
}