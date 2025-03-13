<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\AdminICatalogItemResource;
use App\Models\Category;
use Illuminate\Http\Request;

class AdminBaseController
{

    const NUMBER_ITEM_OF_PAGE = 2;
    public function index(Request $request)
    {
        $page = $request->input('page', 1);

        if ($page == -1) {
            $model = $this->getModelNameByUri($request->route()->action['prefix'], $request->route()->uri());
            $items = $model::where('is_active', true)->get();
        } else {
            $model = $this->getModelNameByUri($request->route()->action['prefix'], $request->route()->uri());
            $items = $model::where('is_active', true)->paginate(self::NUMBER_ITEM_OF_PAGE);
            $result = $items->toArray();
        }

        $result['data'] = AdminICatalogItemResource::collection($items);

        return response()->json($result);
    }

    protected function getModelNameByUri(string $prefix, string $uri): string
    {
        $urlModel = str_replace($prefix, '', $uri);
        $modelString = preg_replace('/\/\{.*\}/', '', $urlModel);

        return $modelString === 'categories'
            ? Category::class
            : ('App\\Models\\' . ucfirst(substr($modelString, 0, -1)));
    }

    /**
     * @param Request $request
     * @return array
     */
    protected function getValues(Request $request): array
    {
        $data =  [
            'order' => $request->order,
            'is_active' => $request->is_active,
        ];

        foreach (['width', 'height', 'depth', 'name', 'slug', 'answer', 'question'] as $field) {
            if (isset($request->$field)) {
                $data[$field] = $request->$field;
            }
        }

        return $data;
    }

    public function store(Request $request)
    {
        $model = $this->getModelNameByUri($request->route()->action['prefix'], $request->route()->uri());
        $model::create($this->getValues($request));
        return response()->json([
            'status' => 1,
        ]);
    }

    public function update(Request $request, $id)
    {
        $model = $this->getModelNameByUri($request->route()->action['prefix'], $request->route()->uri());
        $item = $model::findOrFail($id);
        $item->update($this->getValues($request));
        return response()->json(['status' => 1]);
    }

    public function destroy(Request $request, $id)
    {
        $model = $this->getModelNameByUri($request->route()->action['prefix'], $request->route()->uri());
        $item = $model::findOrFail($id);
        $item->delete();
        return response()->json(['status' => 1]);
    }

    public function show(Request $request, $id) {
        $model = $this->getModelNameByUri($request->route()->action['prefix'], $request->route()->uri());
        $item = $model::findOrFail($id);
        return response()->json(new AdminICatalogItemResource($item));
    }

}
