<?php
namespace App\Http\Controllers\Admin;
use App\Models\Page;
use App\Services\Photos;
use Auth;
use Illuminate\Http\Request;


class PagesController {

    const PATH_PAGE_PHOTOS = '';

    public function index(Request $request)
    {
        $pages = Page::paginate(10);
        return response()->json($pages);
    }

    public function store(Request $request) {

        $settings = $request->settings;

        if (isset($settings['top_banner'])) {
            $topBanner = Photos::savePhotoFromBase64($settings['top_banner'], self::PATH_PAGE_PHOTOS);
            if ($topBanner) {
                $settings['top_banner'] = $topBanner;
            }
        }

        if (isset($settings['bottom_banner'])) {
            $bottomBanner = Photos::savePhotoFromBase64($settings['bottom_banner'], self::PATH_PAGE_PHOTOS);
            if ($bottomBanner) {
                $settings['bottom_banner'] = $bottomBanner;
            }
        }

        Page::create([
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
            $requestSettings = $request->settings;

            $update = [
                'name' => $request->name,
                'alias' => $request->alias
            ];

            if (isset($requestSettings['top_banner'])) {
                $topBanner = Photos::savePhotoFromBase64($requestSettings['top_banner'], self::PATH_PAGE_PHOTOS);
                if ($topBanner) {
                    $settings = $page->settings;
                    Photos::deleteOne(PagesController::PATH_PAGE_PHOTOS . $settings['top_banner']);
                    $requestSettings['top_banner'] = $topBanner;
                }
            }

            if (isset($requestSettings['bottom_banner'])) {
                $bottomBanner = Photos::savePhotoFromBase64($requestSettings['bottom_banner'], self::PATH_PAGE_PHOTOS);
                if ($bottomBanner) {
                    $settings = $page->settings;
                    Photos::deleteOne(PagesController::PATH_PAGE_PHOTOS . $settings['bottom_banner']);
                    $requestSettings['bottom_banner'] = $bottomBanner;
                }
            }

            $update['settings'] = $requestSettings;

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
