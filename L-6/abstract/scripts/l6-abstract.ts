abstract class Resource<T> {
    protected data: T[];

    constructor(data: T[]) {
        this.data = data;
    }

    get(): T[] {
        return this.data;
    }

    getOne<K extends keyof T>(key: K, val: T[K]): T | undefined {
        return this.data.find(item => item[key] === val);
    }

    add(newObj: T): T[] {
        this.data.push(newObj);
        return this.data;
    }

    update<K extends keyof T>(key: K, val: T[K], partialData: Partial<T>): T | undefined {
        const index = this.findIndex(key, val);
        if (index !== -1) {
            this.data[index] = { ...this.data[index], ...partialData };
            return this.data[index];
        }
        return undefined;
    }

    delete<K extends keyof T>(key: K, val: T[K]): T | undefined {
        const index = this.findIndex(key, val);
        if (index !== -1) {
            const deletedItem = this.data.splice(index, 1);
            return deletedItem[0];
        }
        return undefined;
    }

    private findIndex<K extends keyof T>(key: K, val: T[K]): number {
        return this.data.findIndex(item => item[key] === val);
    }
}

type DataType = {
    id: number;
    name: string;
    phone: string;
    email: string;
    address: string;
};

const mockUserData: DataType[] = [
    {
        "id": 1,
        "name": "Lane Mcdonald",
        "phone": "1-980-603-4363",
        "email": "dui@aol.com",
        "address": "P.O. Box 895, 4432 Placerat, Avenue",
    },
    {
        "id": 2,
        "name": "Emma Ford",
        "phone": "(472) 855-7514",
        "email": "aliquam.ornare@protonmail.net",
        "address": "P.O. Box 311, 427 Egestas Av.",
    },
    {
        "id": 3,
        "name": "Louis Juarez",
        "phone": "1-895-966-2657",
        "email": "venenatis.lacus@outlook.net",
        "address": "Ap #125-478 Sit Av.",
    },
    {
        "id": 4,
        "name": "Zorita Mason",
        "phone": "1-262-419-4287",
        "email": "arcu.vel@protonmail.net",
        "address": "P.O. Box 631, 1093 Metus Street",
    },
    {
        "id": 5,
        "name": "Harriet Acevedo",
        "phone": "1-788-618-2639",
        "email": "consequat.dolor@protonmail.net",
        "address": "P.O. Box 769, 5046 Pellentesque, Rd.",
    }
];

class UserModel extends Resource<DataType> {
    constructor(data: DataType[]) {
        super(data);
    }
}


const users = new UserModel([...mockUserData]);

interface OrderDataType {
    id: number;
    price: number;
}

class OrderModel extends Resource<OrderDataType> {
    constructor(data: OrderDataType[]) {
        super(data);
    }
}

const orders = new OrderModel([{
    id: 1,
    price: 100
}, {
    id: 2,
    price: 200,
}, {
    id: 3,
    price: 300
}]);

console.log('---- Тестирование users ----');

console.log('users.get()', users.get());

console.log('users add', users.add({
    "id": 6,
    "name": "Ivan Petrov",
    "phone": "1-788-618-2639",
    "email": "consequat.dolor@protonmail.net",
    "address": "P.O. Box 769, 5046 Pellentesque, Rd.",
}));

console.log('users.getOne()', users.getOne('id', 4));
console.log('users.getOne()', users.getOne('name', 'Lane Mcdonald'));
console.log('users.getOne()', users.getOne('phone', '(472) 855-7514'));
console.log('users.getOne()', users.getOne('id', 12));

console.log('users.update()', users.update('id', 4, { name: 'Sergey' }));
console.log('users.update()', users.update('email', 'dui@aol.com', { address: 'Moscow, Russia', phone: '12345678910' }));
console.log('users.update()', users.update('name', 'Leo Tolstoy', { address: 'Yasnaya polyana, Russia' }));


console.log('users.delete()', users.delete("name", "Ivan Petrov"));
console.log('users.delete()', users.delete("id", 222));

console.log('users.get()4', users.get());

console.log('---- Тестирование orders ----');

console.log('orders.get()', orders.get());
console.log('orders.add()', orders.add({
    id: 4,
    price: 400
}));

console.log('orders.delete', orders.delete('id', 2));

console.log('orders.get', orders.get());

console.log('users.get()', users.get());
console.log('users add', users.add({
    "id": 6,
    "name": "Ivan Petrov",
    "phone": "1-788-618-2639",
    "email": "consequat.dolor@protonmail.net",
    "address": "P.O. Box 769, 5046 Pellentesque, Rd.",
}));


console.log('users.getOne()', users.getOne('id', 4));  // Получение одного объекта с id: 4 (возможно получение по любому ключу и его значению)
console.log('users.getOne()', users.getOne('name', 'Lane Mcdonald'));  // Получение одного объекта по совпадению name
console.log('users.getOne()', users.getOne('phone', '(472) 855-7514'));  // Получение одного объекта по совпадению phone
console.log('users.getOne()', users.getOne('id', 12));  // Не существующий id, вернется undefined

console.log('users.update()', users.update('id', 4, { name: 'Sergey' })); // Изменение поля 'name' в объекте с 'id' равным 4, возвращает измененный объект (поиск по любому ключу, изменяемые данные должны быть совместимы с DataType (Partial))
console.log('users.update()', users.update('email', 'dui@aol.com', {
    address: 'Moscow, Russia',
    phone: '12345678910'
})); // Изменение поля 'name' в объекте с 'id' равным 4, возвращает измененный объект (поиск по любому ключу, изменяемые данные должны быть совместимы с DataType (Partial))
console.log('users.update()', users.update('name', 'Leo Tolstoy', { address: 'Yasnaya polyana, Russia' })); // изменение несуществующей записи вернет undefined и ничего не изменится

console.log('users.get()3', users.get());

console.log('users.get()3', users.get());

console.log('users.delete()', users.delete("name", "Ivan Petrov")); // Удаление объекта с полем name "Ivan Petrov", возвращает удаленный объект
console.log('users.delete()', users.delete("id", 222));  // Удаление несуществующего объекта

console.log('users.get()4', users.get());

console.log('orders.get()', orders.get());

console.log('orders.add()', orders.add({
    id: 4,
    price: 400
}));

console.log('orders.getOne', orders.getOne('id', 1));
console.log('orders.getOne', orders.getOne('price', 200));

console.log('orders.update', orders.update('id', 3, { price: 500 }));

console.log('orders.delete', orders.delete('id', 2));

console.log('orders.get', orders.get());