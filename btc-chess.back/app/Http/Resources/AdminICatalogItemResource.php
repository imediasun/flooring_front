<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminICatalogItemResource extends JsonResource
{
    public function toArray($request) {
        $data = [
            'id' => $this->id,
            'is_active' => $this->is_active ? 1 : 0,
            'order' => $this->order,
        ];

        foreach (['answer', 'question', 'width', 'height', 'depth', 'name', 'slug'] as $field) {
            if (isset($this->$field)) {
                $data[$field] = $this->$field;
            }
        }

        return $data;
    }
}
