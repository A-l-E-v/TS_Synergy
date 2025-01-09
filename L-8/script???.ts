/**
 * Примитивы: string, number и boolean
 *
 * string представляет из себя строки вроде "Hello, world"
 * number цифры и числа
 * boolean - true/false

 */

const str1: string = 'Hello world';
const str2: string  = '';
const str3: string = '123';

const intNumber: number = 23;
const floatNumber: number = 16.5;

const isActive: boolean = true;
const boolean1: boolean = 3 < 2;
const boolean2: boolean = 3 < 2 || !!0;

/**
 * Массивы могут записываться как number[] или Array<numer> (см Generics для второй записи)
 */

const array1: number[] = [1, 2, 3, 4];
const array2: Array<number> = [1, 2, 3, 4];

/**
 * Так же могут быть строки, и любые другие примитивы
 */

const array3: string[] = ['Мама', 'мыла', 'раму']
const array4: Array<string> = ['Я', 'изучаю', 'TypeScript']
const array5: number[] = ['Мама', 'мыла', 'раму']

const array6: Array<boolean> = [false, true, 1 === 1]

/**
 * Any vs unknown
 */

// let obj: any = 'Эта переменная любого типа';
obj.test() // Не выдает ошибку при проверке типов из-за any
obj = 23
obj() // Так же не выдает ошибку


/**
 * The unknown type represents any value. This is similar to the any type,
 * but is safer because it’s not legal to do anything with an unknown value:
 */

function f1(a: any) {
    a.b(); // OK
}
function f2(a: unknown) {
    a.b();
    // 'a' is of type 'unknown'.
}




let obj: any = 'Эта переменная любого типа';
let test: unknown

test = '2345';
const someKnownVariable2: string = obj; // We can assign any to string
const someKnownVariable1: string = test; // We can not assign unknown to string



/**
 *
 * Неявный any.
 * noImplicitAny: true в tsconfig.json запрещает нам неявные any
 */
function f3(a) {
    console.log(a)
}

/**
 *
 * C явно указанными any проблем нет
 */
function f4(a: any) {
    console.log(a)
}


/**
 * void
 */

function f5(a: string): void {
    console.log('Я функция с выходным типом void - я не возвращаю ничего')
}

function f6(a: string): void {
    console.log('Я функция с выходным типом void - я не возвращаю ничего')
    return;
}

function f7(a: string): string {
    console.log('Я функция с выходным типом string - я должна вернуть строку, а я не возвращаю ничего (void)')
}

function f8(a: string): string {
    console.log('Я функция с выходным типом string - я возвращаю строку, все в порядке');
    return a
}

function f9(a: number): string {
    console.log('Я принимаю number, конвертирую и возвращаю строку, все в порядке');
    return a.toString();
}

/**
 *  undefined, null
 */

let someUndefined: undefined;
someUndefined = 'test'; // Type '"test"' is not assignable to type 'undefined'

let someUndefined2: undefined = undefined;
let someUndefined3: undefined = null; // Type 'null' is not assignable to type 'undefined'.
let someUndefined4: undefined = 0; // Type '0' is not assignable to type 'undefined'.

let someNull: null;
someNull = null;
someNull = undefined;
someNull = 0;
someNull = false;


/**
 * Объекты
 */

let myObject: object = {}
myObject = []


/**
 * Служебный тип для всех JS-объектов, к ним относятся и функции
 * Вы скорее всего никогда не будете использовать служебный тип Object
 */
let myObject2: Object = {}


/**
 * типы-объекты
 */

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });


/**
 *
 * опциональные типы
 * ? - аналог undefined
 * (parameter) arg: string | undefined
 */
const returnArgument = (arg?: string): void => {
    if (arg) {
        console.log(`Argument: ${arg}`)
    } else {
        throw new Error('No argument')
    }
}

returnArgument('string');
returnArgument();
returnArgument(123);



/**
 * объединенные-типы (union)
 */

let stringOrNumber: string | number = 'test';
stringOrNumber = 123;
stringOrNumber = false;
stringOrNumber = { x: 123 };


const returnArgument2 = (arg?: string | number): string | number | void => {
    if (arg && typeof arg === 'string') {
        console.log(`String: ${arg}`);
        return arg;
    } else if (arg && typeof arg === 'number') {
        console.log(`Number: ${arg}`)
        return arg * 2;
    } else {
        console.log(typeof arg)
        throw new Error('No argument')
    }
}














/**
 * Пересекающиеся типы (Intersection types)
 */
type typeA = {a: string}
type typeB = {b: number, c: boolean}
type typeAB = typeA & typeB;

const someObj: typeAB = {
    a: 'hello',
    b: 1,
    c: false
}








/**
 * Литералы (Literal types)
 */

let x: "hello" = "hello";
// OK
x = "hello";
// ...
x = "howdy"; // Type '"howdy"' is not assignable to type '"hello"'.

/**
 * Объединение литералов
 */
function printText(s: string, alignment: "left" | "right" | "center") {
// ...
}
printText("Hello, world", "left");
printText("Happy birthday, mate", "centre"); //Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.



/**
 * Переиспользуемые типы (алиасы)
 */

type User = {
    fullName: string;
    age: number;
}

type Transaction = {
    id: number;
    type: 'debit' | 'credit';
    owner: User
}

const transactionsList: Transaction[] = [{
    id: 1,
    type: 'debit',
    owner: {
        fullName: 'Sergey',
        age: 31
    }
}, {
    id: 2,
    type: 'credit1',
    owner: {
        fullName: 'Ivan',
        age: 29
    }
}]

const getTransactionById = (id: number): Transaction | undefined => {
    return transactionsList.find((t: Transaction) => t.id === id)
}


console.log('getTransactionById 1', getTransactionById(1))
console.log('getTransactionById 2 ', getTransactionById(2))
console.log("getTransactionById ''", getTransactionById(''))
console.log('getTransactionById null', getTransactionById(null))


/**
 * Утверждение типа (Type Assertions)
 * Иногда TS не знаетдействительного типа и может предположить ошибочный,
 * например ниже TS предположит тип HTMLElement, а мы знаем что тип будет HTMLCanvasElement
 * мы сможем сообщить компилятору правильный тип, то есть "сконвертировать" переменную myCanvas
 */

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas2 = document.getElementById("main_canvas") as string;

const userId = 1 as string;
//Conversion of type 'number' to type 'string' may be a mistake
// because neither type sufficiently overlaps with the other.
// If this was intentional, convert the expression to 'unknown' first.

const userId2 = 1 as unknown as string; // Теперь TS будет принудительно считать данную переменную строковой
let someArray = ['foo', 'bar', 'baz']
someArray = ['foo', 'bar', 'baz', 21, true]
const someArray2 = ['foo', 'bar', 'baz', 21, true] as Array<any>

/** Non-null Assertion Operator (Postfix!)
 */


function liveDangerously(x?: number | null) {
    console.log(x.toFixed()); // 'x' is possibly 'null' or 'undefined'.

    // No error
    console.log(x!.toFixed());
}

/**
 * Использовать Assertions с осторожностью!
 */





/**
 * Template Literal Types.
 */

type World = "world";

type Greeting1 = `hello ${World}`;
// type Greeting1 = "hello world"