<?php

namespace App\Http\Requests\User;

class UpdateUserRequest extends BaseUserRequest
{
    /**
     * Validation Rules
     */
    public function rules(): array
    {
        $rules = parent::rules();

        $rules['password'] = [
            'nullable',
            'string',
            'min:8',
            'confirmed',
        ];

        return $rules;
    }
}