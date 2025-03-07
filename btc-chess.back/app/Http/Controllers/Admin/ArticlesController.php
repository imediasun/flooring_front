<?php
namespace App\Http\Controllers\Admin;
use App\Http\Resources\ArticleResource;
use App\Models\Article;
use App\Models\Everything;
use App\Services\Photos;
use Auth;
use Illuminate\Http\Request;

class ArticlesController {

    const PATH_ARTICLE_PHOTOS = 'photos/articles/';

    public function index(Request $request)
    {
        $articles = Article::paginate(2);
        $result = $articles->toArray();
        $result['data'] = ArticleResource::collection($articles);
        return response()->json($result);
    }

    public function store(Request $request) {
        $bigImage = Photos::savePhotoFromBase64($request->big_photo, self::PATH_ARTICLE_PHOTOS);
        $smallImage = Photos::savePhotoFromBase64($request->small_photo, self::PATH_ARTICLE_PHOTOS);

        Article::create([
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
        $article = Article::find($id);
        if ($article) {
            return response()->json(new ArticleResource($article));
        } else {
            return response()->json(['message' => 'Record not found.'], 404);
        }
    }

    public function update(Request $request, $id) {
        $article = Article::find($id);
        if ($article) {

            $bigImage = Photos::savePhotoFromBase64($request->big_photo, self::PATH_ARTICLE_PHOTOS);
            $smallImage = Photos::savePhotoFromBase64($request->small_photo, self::PATH_ARTICLE_PHOTOS);

            $update = [
                'big_caption' => $request->big_caption,
                'small_caption' => $request->small_caption
            ];

            if ($bigImage) {
                Photos::deleteOne(self::PATH_ARTICLE_PHOTOS . $article->big_photo);
                $update['big_photo'] = $bigImage;
            }

            if ($smallImage) {
                Photos::deleteOne(self::PATH_ARTICLE_PHOTOS . $article->small_photo);
                $update['small_photo'] = $smallImage;
            }

            $article->update($update);
            return response()->json(['status' => 1]);
        } else {
            return response()->json(['message' => 'Record not found.'], 404);
        }
    }

    public function destroy(Request $request, $id) {
        $article = Article::find($id);
        if ($article) {
            Photos::delete($article);
            $article->delete();
            return response()->json(['status' => 1]);
        } else {
            return response()->json(['message' => 'Record not found.'], 404);
        }
    }
}
