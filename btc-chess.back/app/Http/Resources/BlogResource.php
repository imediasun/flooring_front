<?php

namespace App\Http\Resources;

use App\Http\Controllers\Admin\BlogsController;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    public function toArray($request) {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'small_caption' => $this->small_caption,
            'big_caption' => $this->big_caption,
            'small_photo' => BlogsController::PATH_BLOG_PHOTOS . $this->small_photo,
            'big_photo' => BlogsController::PATH_BLOG_PHOTOS . $this->big_photo
        ];
    }
}
