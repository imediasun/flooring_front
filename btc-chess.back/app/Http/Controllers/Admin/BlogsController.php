<?php
namespace App\Http\Controllers\Admin;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use App\Services\Photos;
use Auth;
use Illuminate\Http\Request;

class BlogsController {

    const PATH_BLOG_PHOTOS = 'photos/blogs/';

    public function index(Request $request)
    {
        $blogs = Blog::paginate(2);
        $result = $blogs->toArray();
        $result['data'] = BlogResource::collection($blogs);
        return response()->json($result);
    }

    public function store(Request $request) {
        $bigImage = Photos::savePhotoFromBase64($request->big_photo, self::PATH_BLOG_PHOTOS);
        $smallImage = Photos::savePhotoFromBase64($request->small_photo, self::PATH_BLOG_PHOTOS);

        Blog::create([
            'big_caption' => $request->big_caption,
            'small_caption' => $request->small_caption,
            'title' => $request->title,
            'big_photo' => $bigImage,
            'small_photo' => $smallImage
        ]);

        return response()->json([
            'status' => 1,
        ]);
    }

    public function show(Request $request, $id) {
        $blog = Blog::find($id);
        if ($blog) {
            return response()->json(new BlogResource($blog));
        } else {
            return response()->json(['message' => 'Record not found.'], 404);
        }
    }

    public function update(Request $request, $id) {
        $blog = Blog::find($id);
        if ($blog) {
            $bigImage = Photos::savePhotoFromBase64($request->big_photo, self::PATH_BLOG_PHOTOS);
            $smallImage = Photos::savePhotoFromBase64($request->small_photo, self::PATH_BLOG_PHOTOS);

            $update = [
                'big_caption' => $request->big_caption,
                'small_caption' => $request->small_caption,
                'title' => $request->title
            ];

            if ($bigImage) {
                Photos::deleteOne(BlogsController::PATH_BLOG_PHOTOS . $blog->big_photo);
                $update['big_photo'] = $bigImage;
            }

            if ($smallImage) {
                Photos::deleteOne(BlogsController::PATH_BLOG_PHOTOS . $blog->small_photo);
                $update['small_photo'] = $smallImage;
            }

            $blog->update($update);
            return response()->json(['status' => 1]);
        } else {
            return response()->json(['message' => 'Record not found.'], 404);
        }
    }

    public function destroy(Request $request, $id) {
        $blog = Blog::find($id);
        if ($blog) {
            Photos::delete($blog);
            $blog->delete();
            return response()->json(['status' => 1]);
        } else {
            return response()->json(['message' => 'Record not found.'], 404);
        }
    }
}
