import { Category } from "../model/Category";
import { Priority } from "../model/Priority";
import { Task } from "../model/Task";


export class TestData {
    static categories: Category[] = [
        {id: 1, title: "Работа"},
        {id: 2, title: "Семья"},
        {id: 3, title: "Учеба"},
        {id: 4, title: "Отдых"},
        {id: 5, title: "Спорт"},
        {id: 6, title: "Еда"},
        {id: 7, title: "Финансы"},
        {id: 8, title: "Гаджеты"},
        {id: 9, title: "Здоровье"},
        {id: 10, title: "Автомобиль"}
    ];

    static priorities: Priority[] = [
        {id: 1, title: "Низкий", color: "#e5e5e5"},
        {id: 2, title: "Средний", color: "#85d1b2"},
        {id: 3, title: "Высокий", color: "#f1828d"},
        {id: 4, title: "Найвысшый", color: "#f1128o"}
    ];

    static tasks: Task[] = [
        {
            id: 1,
            title: 'Залить бензин на полный бак',
            priority: TestData.priorities[2],
            completed:false,
            category: TestData.categories[9],
            date: new Date('2023-10-01')
        },

        {
            id: 2,
            title: 'Передать отчеты начальнику',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2023-10-02')
        },
        {
            id: 3,
            title: 'Убраться дома',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[1],
        },
        {
            id: 4,
            title: 'Сходить в парк',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[9],
            date: new Date('2023-10-01')
        },


    ]
}