<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

abstract class BaseProfileRequest extends FormRequest
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
            | Informasi Desa
            |--------------------------------------------------------------------------
            */

            'village_name' => [
                'required',
                'string',
                'max:255',
            ],

            'village_head' => [
                'nullable',
                'string',
                'max:255',
            ],

            'district' => [
                'required',
                'string',
                'max:255',
            ],

            'regency' => [
                'required',
                'string',
                'max:255',
            ],

            'province' => [
                'required',
                'string',
                'max:255',
            ],

            /*
            |--------------------------------------------------------------------------
            | Media
            |--------------------------------------------------------------------------
            */

            'logo' => [
                'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp,svg',
                'max:2048',
            ],

            'hero_image' => [
                'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:4096',
            ],

            /*
            |--------------------------------------------------------------------------
            | Profil
            |--------------------------------------------------------------------------
            */

            'history' => [
                'nullable',
                'string',
            ],

            'vision' => [
                'nullable',
                'string',
            ],

            'mission' => [
                'nullable',
                'string',
            ],

            /*
            |--------------------------------------------------------------------------
            | Geografi
            |--------------------------------------------------------------------------
            */

            'area' => [
                'nullable',
                'numeric',
                'min:0',
            ],

            'population' => [
                'nullable',
                'integer',
                'min:0',
            ],

            'family_count' => [
                'nullable',
                'integer',
                'min:0',
            ],

            'hamlet_count' => [
                'nullable',
                'integer',
                'min:0',
            ],

            'rt_count' => [
                'nullable',
                'integer',
                'min:0',
            ],

            'rw_count' => [
                'nullable',
                'integer',
                'min:0',
            ],

            /*
            |--------------------------------------------------------------------------
            | Batas Wilayah
            |--------------------------------------------------------------------------
            */

            'north_boundary' => [
                'nullable',
                'string',
            ],

            'south_boundary' => [
                'nullable',
                'string',
            ],

            'east_boundary' => [
                'nullable',
                'string',
            ],

            'west_boundary' => [
                'nullable',
                'string',
            ],

            /*
            |--------------------------------------------------------------------------
            | Koordinat
            |--------------------------------------------------------------------------
            */

            'latitude' => [
                'nullable',
                'numeric',
                'between:-90,90',
            ],

            'longitude' => [
                'nullable',
                'numeric',
                'between:-180,180',
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
        ];
    }

    /**
     * Custom Messages
     */
    public function messages(): array
    {
        return [

            'village_name.required' => 'Nama desa wajib diisi.',

            'district.required' => 'Kecamatan wajib diisi.',

            'regency.required' => 'Kabupaten wajib diisi.',

            'province.required' => 'Provinsi wajib diisi.',

            'logo.image' => 'Logo harus berupa gambar.',

            'hero_image.image' => 'Hero image harus berupa gambar.',

            'latitude.between' => 'Latitude tidak valid.',

            'longitude.between' => 'Longitude tidak valid.',
        ];
    }

    /**
     * Custom Attributes
     */
    public function attributes(): array
    {
        return [

            'village_name' => 'Nama Desa',

            'village_head' => 'Kepala Desa',

            'district' => 'Kecamatan',

            'regency' => 'Kabupaten',

            'province' => 'Provinsi',

            'logo' => 'Logo',

            'hero_image' => 'Hero Image',

            'history' => 'Sejarah',

            'vision' => 'Visi',

            'mission' => 'Misi',

            'area' => 'Luas Wilayah',

            'population' => 'Jumlah Penduduk',

            'family_count' => 'Jumlah KK',

            'hamlet_count' => 'Jumlah Dusun',

            'rt_count' => 'Jumlah RT',

            'rw_count' => 'Jumlah RW',

            'north_boundary' => 'Batas Utara',

            'south_boundary' => 'Batas Selatan',

            'east_boundary' => 'Batas Timur',

            'west_boundary' => 'Batas Barat',

            'latitude' => 'Latitude',

            'longitude' => 'Longitude',

            'is_active' => 'Status',
        ];
    }
}