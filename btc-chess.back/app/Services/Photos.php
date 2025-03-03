<?php

namespace App\Services;

use App\Http\Controllers\Admin\EverythingsController;
use App\Http\Controllers\Admin\PagesController;
use App\Models\Everything;
use Illuminate\Support\Facades\Storage;

class Photos
{

    public static function savePhotoFromBase64($base64Image, $path) : string {
        if (!$base64Image) {
            return '';
        }
        $imageData = explode(';', $base64Image);
        $imageType = str_replace('data:image/', '', $imageData[0]);
        $image = substr($base64Image, strpos($base64Image, ',') + 1);
        $imageData = base64_decode($image);
        $imageName = substr(uniqid(time() . '_', true), 0, 32) . '.' . $imageType;
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

        if ($model instanceof Page) {
            $settings = json_decode($model->settings, true);
            if ($settings['banner']) {
                self::deleteOne(PagesController::PATH_PAGE_PHOTOS . $settings['banner']);
            }
        }
    }
}
