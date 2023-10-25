import { Category } from "../model/Category";
import { Priority } from "../model/Priority";
import { Task } from "../model/Task";


export class TestData {
    static categories: Category[] = [
        {$id: 1, title: "Робота"},
        {$id: 2, title: "Сім'я"},
        {$id: 3, title: "Навчання"},
        {$id: 4, title: "Відпочинок"},
        {$id: 5, title: "Спорт"},
        {$id: 6, title: "Їжа"},
        {$id: 7, title: "Фінанси"},
        {$id: 8, title: "Гаджети"},
        {$id: 9, title: "Здоров'я'"},
        {$id: 10, title: "Автомобіль"}
    ];

    static priorities: Priority[] = [
        {$id: 1, title: "Низький", color: "#e5e5e5"},
        {$id: 2, title: "Середній", color: "#85d1b2"},
        {$id: 3, title: "Високий", color: "#f1828d"},
        {$id: 4, title: "Найвищий", color: "#f1128o"}
    ];

    static tasks: Task[] = [
        {
            $id: 1,
            title: 'Залити бензин на повнийй бак',
            priority: TestData.priorities[2],
            completed:false,
            category: TestData.categories[9],
            date: new Date('2023-10-01')
        },

        {
            $id: 2,
            title: 'Передати звіти директору',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2023-10-02')
        },
        {
            $id: 3,
            title: 'Прибирання в дома',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[1],
        },
        {
            $id: 4,
            title: 'Сходити в парк',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[2],
            date: new Date('2023-10-01')
        },
        {
            $id: 4,
            title: 'Приготувати вечерю',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[5],
            date: new Date('2023-10-25')
        },


    ]
}