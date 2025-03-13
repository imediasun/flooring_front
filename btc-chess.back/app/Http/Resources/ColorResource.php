<?php

namespace App\Http\Resources;

use App\Http\Controllers\Admin\ColorsController;
use Illuminate\Http\Resources\Json\JsonResource;

class ColorResource extends JsonResource
{
    public function toArray($request) {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'hash' => $this->hash,
            'photo' => ColorsController::PATH_COLOR_PHOTOS . $this->photo
        ];
    }
}
