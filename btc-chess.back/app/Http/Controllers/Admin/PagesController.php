<?php
namespace App\Http\Controllers\Admin;
use Auth;
use Illuminate\Http\Request;

class PagesController {

    public function getFakeData () {
        // We have to create field settings in JSON that will be contains all params that shows on page
        // Before returning the data, we will format the data separately
        // We must establish the linkage through the alias field.
        // Example for contact page settings => [
        // 'instagram',
        // 'linkedin',
        // 'facebook',
        // 'twitter',
        // 'email'
        // 'phone' ]
        return [
            ['id' => 1,
                'name' => 'Main page',
                'alias' => 'main',
            ],
            ['id' => 2, 'name' => 'Who we are?', 'alias' => 'Who_we_are'],
            ['id' => 3, 'name' => 'Contact us', 'alias' => 'contact_us'],
        ];
    }

    public function index(Request $request)
    {
        $response = response()->json([
            'list' => $this->getFakeData(),
            'pagination' => [
                'current_page' => 2,
                'per_page' => 10,
                'total' =>  100,
                'last_page' => 10
            ]
       ]);

        return $response;
    }

    public function store(Request $request) {
        // тут повинен бути код що добавляє в базі даних значення після цього ми повністю оновляємо всі елементи
        return response()->json([
            'status' => 1
        ]);
    }

    public function show(Request $request) {
        return ['id' => 8, 'order' => 8, 'name' => 'Администрирование', 'description' => 'Системное администрирование'];
    }

    public function update(Request $request) {
        // тут повинен бути код що змінює в базі даних значення
        return response()->json([
            'status' => 1
        ]);
    }

    public function destroy(Request $request) {
        // тут повинен бути код що видаляє в базі даних значення
        return response()->json([
            'status' => 1
        ]);
    }

}
