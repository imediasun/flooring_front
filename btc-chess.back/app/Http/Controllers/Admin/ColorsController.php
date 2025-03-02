<?php
namespace App\Http\Controllers\Admin;
use Auth;
use Illuminate\Http\Request;

class ColorsController {

    public function getFakeData () {
        return [
            ['id' => 8, 'order' => 8, 'name' => 'Администрирование', 'description' => 'Системное администрирование'],
            ['id' => 9, 'order' => 9, 'name' => 'Аутсорсинг и консалтинг', 'description' => 'Передача задач сторонней организации'],
            ['id' => 10, 'order' => 10, 'name' => 'Переводы', 'description' => 'Устные и письменные переводы'],
            ['id' => 1, 'order' => 1, 'name' => 'Программирование', 'description' => 'Разработка программного обеспечения'],
            ['id' => 2, 'order' => 2, 'name' => 'Дизайн и арт', 'description' => 'Создание визуальных образов'],
//            ['id' => 3, 'order' => 3, 'name' => 'Услуги', 'description' => 'Предоставление различных услуг'],
//            ['id' => 4, 'order' => 4, 'name' => 'Фото, аудио и видео', 'description' => 'Создание и обработка медиаконтента'],
//            ['id' => 5, 'order' => 5, 'name' => 'Продвижение', 'description' => 'Маркетинг и реклама'],
//            ['id' => 6, 'order' => 6, 'name' => 'Архитектура и инжиниринг', 'description' => 'Проектирование и строительство'],
//            ['id' => 7, 'order' => 7, 'name' => 'Мобильные приложения', 'description' => 'Разработка мобильных приложений'],
//            ['id' => 11, 'order' => 11, 'name' => 'Мобильные приложения11', 'description' => 'Разработка мобильных приложений11'],
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
