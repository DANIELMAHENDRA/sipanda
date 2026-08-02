<?php

namespace App\Http\Requests\Service;

class StoreServiceRequest extends BaseServiceRequest
{
    /**
     * Validation rules.
     */
    public function rules(): array
    {
        return $this->baseRules();
    }
}