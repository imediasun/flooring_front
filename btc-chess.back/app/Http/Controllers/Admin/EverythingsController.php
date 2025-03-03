<?php
namespace App\Http\Controllers\Admin;
use App\Models\Everything;
use App\Services\Photos;
use Auth;
use Illuminate\Http\Request;

class EverythingsController {

    const PATH_EVERYTHING_PHOTOS = '/photos/everythings/';

    public function index(Request $request)
    {
        $everythings = Everything::paginate(10);
        return response()->json($everythings);
    }

    public function store(Request $request) {
        $bigImage = Photos::savePhotoFromBase64($request->big_photo, self::PATH_EVERYTHING_PHOTOS);
        $smallImage = Photos::savePhotoFromBase64($request->small_photo, self::PATH_EVERYTHING_PHOTOS);

        Everything::create([
            'big_caption' => $request->big_caption,
            'small_caption' => $request->small_caption,
            'big_photo' => $bigImage,
            'small_photo' => $smallImage
        ]);

        return response()->json([
            'status' => 1,
        ]);
    }

    public function show(Request $request, $id) {
        $everything = Everything::find($id);
        if ($everything) {
            return response()->json($everything->toArray());
        } else {
            return response()->json(['message' => 'Record not found.'], 404);
        }
    }

    public function update(Request $request, $id) {
        $everything = Everything::find($id);
        if ($everything) {

            $bigImage = Photos::savePhotoFromBase64($request->big_photo, self::PATH_EVERYTHING_PHOTOS);
            $smallImage = Photos::savePhotoFromBase64($request->small_photo, self::PATH_EVERYTHING_PHOTOS);

            $update = [
                'big_caption' => $request->big_caption,
                'small_caption' => $request->small_caption
            ];

            if ($bigImage) {
                Photos::deleteOne(EverythingsController::PATH_EVERYTHING_PHOTOS . $everything->big_photo);
                $update['big_photo'] = $bigImage;
            }

            if ($smallImage) {
                Photos::deleteOne(EverythingsController::PATH_EVERYTHING_PHOTOS . $everything->small_photo);
                $update['small_photo'] = $smallImage;
            }

            $everything->update($update);
            return response()->json(['status' => 1]);
        } else {
            return response()->json(['message' => 'Record not found.'], 404);
        }
    }

    public function destroy(Request $request, $id) {
        $everything = Everything::find($id);
        if ($everything) {
            Photos::delete($everything);
            $everything->delete();
            return response()->json(['status' => 1]);
        } else {
            return response()->json(['message' => 'Record not found.'], 404);
        }
    }
}
