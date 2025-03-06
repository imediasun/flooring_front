<?php

namespace App\Http\Resources;

use App\Http\Controllers\Admin\ArticlesController;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    public function toArray($request) {
        return [
            'id' => $this->id,
            'small_caption' => $this->small_caption,
            'big_caption' => $this->big_caption,
            'small_photo' => ArticlesController::PATH_ARTICLE_PHOTOS . $this->small_photo,
            'big_photo' => ArticlesController::PATH_ARTICLE_PHOTOS . $this->big_photo
        ];
    }
}
