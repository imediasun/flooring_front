<?php
namespace App\Http\Controllers\Admin;
use App\Http\Resources\ColorResource;
use App\Models\Color;
use App\Services\Photos;
use Auth;
use Illuminate\Http\Request;

class ColorsController {

    const PATH_COLOR_PHOTOS = 'photos/colors/';


    public function index(Request $request)
    {
        $colors = Color::paginate(10);
        $result = $colors->toArray();
        $result['data'] = ColorResource::collection($colors);
        return response()->json($result);
    }

    public function store(Request $request) {
        $photo = Photos::savePhotoFromBase64($request->photo, self::PATH_COLOR_PHOTOS);

        Color::create([
            'hash' => $request->hash,
            'name' => $request->name,
            'photo' => $photo,
        ]);

        return response()->json([
            'status' => 1,
        ]);
    }

    public function show(Request $request, $id) {
        $color = Color::findOrFail($id);
        return response()->json(new ColorResource($color));
    }

    public function update(Request $request, $id) {
        $color = Color::findOrFail($id);
        $photo = Photos::savePhotoFromBase64($request->photo, self::PATH_COLOR_PHOTOS);
        $update = [
            'name' => $request->name,
            'hash' => $request->hash,
        ];

        if ($photo) {
            Photos::deleteOne(self::PATH_COLOR_PHOTOS . $color->photo);
            $update['photo'] = $photo;
        }

        $color->update($update);
        return response()->json(['status' => 1]);
    }

    public function destroy(Request $request, $id) {
        $color = Color::findOrFail($id);
        Photos::delete($color);
        $color->delete();
        return response()->json(['status' => 1]);
    }

}
