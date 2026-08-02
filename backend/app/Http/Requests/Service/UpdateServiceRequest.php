<?php

namespace App\Http\Requests\Service;

class UpdateServiceRequest extends BaseServiceRequest
{
    /**
     * Validation rules.
     */
    public function rules(): array
    {
        return $this->baseRules();
    }
}