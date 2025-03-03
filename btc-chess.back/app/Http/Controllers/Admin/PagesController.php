<?php
namespace App\Http\Controllers\Admin;
use App\Models\Page;
use App\Services\Photos;
use Auth;
use Illuminate\Http\Request;


class PagesController {

    const PATH_PAGE_PHOTOS = '/photos/pages/';

    public function index(Request $request)
    {
        $pages = Page::paginate(10);
        return response()->json($pages);
    }

    public function store(Request $request) {

        $settings = json_decode($request->settings, true);

        $bannerImage = Photos::savePhotoFromBase64($settings['banner'], self::PATH_PAGE_PHOTOS);

        if ($bannerImage) {
            $settings['banner'] = $bannerImage;
        }

        Everything::create([
            'name' => $request->name,
            'alias' => $request->alias,
            'settings' => $settings,
        ]);

        return response()->json([
            'status' => 1,
        ]);
    }

    public function show(Request $request, $id) {
        $page = Page::find($id);
        if ($page) {
            return response()->json($page->toArray());
        } else {
            return response()->json(['message' => 'Record not found.'], 404);
        }
    }

    public function update(Request $request, $id) {
        $page = Page::find($id);
        if ($page) {
            $requestSettings = json_decode($request->settings, true);
            $bannerImage = Photos::savePhotoFromBase64($requestSettings['banner'], self::PATH_PAGE_PHOTOS);

            $update = [
                'name' => $request->name,
                'alias' => $request->alias
            ];

            if ($bannerImage) {
                $settings = json_decode($page->settings, true);
                Photos::deleteOne(PagesController::PATH_PAGE_PHOTOS . $settings['banner']);

                $requestSettings['banner'] = $bannerImage;
                $update['settings'] = $requestSettings;
            }

            $page->update($update);
            return response()->json(['status' => 1]);
        } else {
            return response()->json(['message' => 'Record not found.'], 404);
        }
    }

    public function destroy(Request $request, $id) {
        $page = Page::find($id);
        if ($page) {
            Photos::delete($page);
            $page->delete();
            return response()->json(['status' => 1]);
        } else {
            return response()->json(['message' => 'Record not found.'], 404);
        }
    }

}
