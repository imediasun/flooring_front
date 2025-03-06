<?php

namespace App\Http\Resources;

use App\Http\Controllers\Admin\EverythingsController;
use Illuminate\Http\Resources\Json\JsonResource;

class EverythingResource extends JsonResource
{
    public function toArray($request) {
        return [
            'id' => $this->id,
            'small_caption' => $this->small_caption,
            'big_caption' => $this->big_caption,
            'small_photo' => EverythingsController::PATH_EVERYTHING_PHOTOS . $this->small_photo,
            'big_photo' => EverythingsController::PATH_EVERYTHING_PHOTOS . $this->big_photo
        ];
    }
}
