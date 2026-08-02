<?php

namespace App\Http\Requests\Service;

use Illuminate\Foundation\Http\FormRequest;

class BaseServiceRequest extends FormRequest
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

            'title' => [
                'required',
                'string',
                'max:255',
            ],

            'icon' => [
                'nullable',
                'string',
                'max:255',
            ],

            'description' => [
                'nullable',
                'string',
            ],

            'requirements' => [
                'nullable',
                'string',
            ],

            'procedure' => [
                'nullable',
                'string',
            ],

            'processing_time' => [
                'nullable',
                'string',
                'max:255',
            ],

            'cost' => [
                'nullable',
                'string',
                'max:255',
            ],

            'person_in_charge' => [
                'nullable',
                'string',
                'max:255',
            ],

            'order_number' => [
                'nullable',
                'integer',
                'min:1',
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

            'title.required' => 'Nama layanan wajib diisi.',
            'title.max' => 'Nama layanan maksimal 255 karakter.',

            'icon.max' => 'Icon maksimal 255 karakter.',

            'processing_time.max' => 'Lama proses maksimal 255 karakter.',

            'cost.max' => 'Biaya maksimal 255 karakter.',

            'person_in_charge.max' => 'Penanggung jawab maksimal 255 karakter.',

            'order_number.integer' => 'Urutan harus berupa angka.',
            'order_number.min' => 'Urutan minimal 1.',

            'is_active.boolean' => 'Status aktif tidak valid.',

        ];
    }
}