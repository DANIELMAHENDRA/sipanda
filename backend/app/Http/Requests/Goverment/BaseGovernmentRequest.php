<?php

namespace App\Http\Requests\Government;

use Illuminate\Foundation\Http\FormRequest;

class BaseGovernmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Validation Rules
     */
    protected function baseRules(): array
    {
        return [

            'name' => [
                'required',
                'string',
                'max:255',
            ],

            'position' => [
                'required',
                'string',
                'max:255',
            ],

            'photo' => [
                'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:2048',
            ],

            'description' => [
                'nullable',
                'string',
            ],

            'order_number' => [
                'nullable',
                'integer',
                'min:1',
            ],

            'is_head' => [
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
     * Custom Validation Messages
     */
    public function messages(): array
    {
        return [

            'name.required' => 'Nama wajib diisi.',
            'name.max' => 'Nama maksimal 255 karakter.',

            'position.required' => 'Jabatan wajib diisi.',

            'photo.image' => 'File harus berupa gambar.',
            'photo.mimes' => 'Format gambar harus jpg, jpeg, png, atau webp.',
            'photo.max' => 'Ukuran gambar maksimal 2 MB.',

            'order_number.integer' => 'Urutan harus berupa angka.',
            'order_number.min' => 'Urutan minimal 1.',

            'status.required' => 'Status wajib dipilih.',
            'status.in' => 'Status tidak valid.',

        ];
    }
}