<?php

namespace App\Http\Requests\Contact;

class StoreContactRequest extends BaseContactRequest
{
    /**
     * Validation rules.
     */
    public function rules(): array
    {
        return $this->baseRules();
    }
}