<?php

namespace App\Services;

use App\Http\Controllers\Admin\ArticlesController;
use App\Http\Controllers\Admin\BlogsController;
use App\Http\Controllers\Admin\ColorsController;
use App\Http\Controllers\Admin\EverythingsController;
use App\Http\Controllers\Admin\PagesController;
use App\Http\Controllers\Admin\ProductsController;
use App\Models\Article;
use App\Models\Blog;
use App\Models\Color;
use App\Models\Everything;
use App\Models\Page;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class Photos
{

    const MAIN_ALIAS = 'main';

    public static function savePhotoFromBase64($base64Image, $path) : string {
        if (!$base64Image) {
            return '';
        }
        $imageData = explode(';', $base64Image);
        $imageType = str_replace('data:image/', '', $imageData[0]);
        $image = substr($base64Image, strpos($base64Image, ',') + 1);
        $imageData = base64_decode($image);
        $imageName = uniqid(time() . '_', false) . '.' . $imageType;
        Storage::put($path . $imageName, $imageData);
        return $imageName;
    }

    public static function deleteOne($path) : void {
        Storage::delete($path);
    }

    public static function delete($model) : void
    {
        if ($model instanceof Everything) {
            self::deleteOne(EverythingsController::PATH_EVERYTHING_PHOTOS . $model->small_photo);
            self::deleteOne(EverythingsController::PATH_EVERYTHING_PHOTOS . $model->big_photo);
        }

        if ($model instanceof Article) {
            self::deleteOne(ArticlesController::PATH_ARTICLE_PHOTOS . $model->small_photo);
            self::deleteOne(ArticlesController::PATH_ARTICLE_PHOTOS . $model->big_photo);
        }

        if ($model instanceof Product) {
            self::deleteOne(ProductsController::PATH_PRODUCT_PHOTOS . $model->small_photo);
        }

        if ($model instanceof Blog) {
            self::deleteOne(BlogsController::PATH_BLOG_PHOTOS . $model->small_photo);
            self::deleteOne(BlogsController::PATH_BLOG_PHOTOS . $model->big_photo);
        }

        if ($model instanceof Page && $model->alias === self::MAIN_ALIAS) {
            $settings = $model->settings;

            if ($settings['top_banner']) {
                self::deleteOne(PagesController::PATH_PAGE_PHOTOS . $settings['top_banner']);
            }

            if ($settings['bottom_banner']) {
                self::deleteOne(PagesController::PATH_PAGE_PHOTOS . $settings['bottom_banner']);
            }
        }

        if ($model instanceof Color) {
            self::deleteOne(ColorsController::PATH_COLOR_PHOTOS . $model->photo);
        }
    }
}
