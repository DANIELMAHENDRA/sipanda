<?php

namespace App\Http\Requests\User;

class StoreUserRequest extends BaseUserRequest
{
    /**
     * Validation Rules
     */
    public function rules(): array
    {
        $rules = parent::rules();

        $rules['password'] = [
            'required',
            'string',
            'min:8',
            'confirmed',
        ];

        return $rules;
    }
}