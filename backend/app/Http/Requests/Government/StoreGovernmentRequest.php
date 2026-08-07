<?php

namespace App\Http\Requests\Government;

class StoreGovernmentRequest extends BaseGovernmentRequest
{
    /**
     * Validation Rules
     */
    public function rules(): array
    {
        return $this->baseRules();
    }
}