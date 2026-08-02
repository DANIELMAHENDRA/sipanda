<?php

namespace App\Http\Requests\Contact;

class UpdateContactRequest extends BaseContactRequest
{
    /**
     * Validation rules.
     */
    public function rules(): array
    {
        return $this->baseRules();
    }
}