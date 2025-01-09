// const columns = [
//     { id: 'name', label: 'Name'},
//     { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//     {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value : number) => value.toLocaleString('en-US'),
//     },
//     {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value : number) => value.toLocaleString('en-US'),
//     },
//     {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value : number) => value.toFixed(2),
//     },
//     ];
    

// Объединение строковых литералов для поля id
type ColumnId = 'name' | 'code' | 'population' | 'size' | 'density';

// Строковой литерал для поля align
type ColumnAlign = 'right';

// Тип функции для поля format, принимающей число и возвращающей строку
type ColumnFormat = (value: number) => string;

// Интерфейс, описывающий структуру объекта с опциональными полями minWidth, align и format
interface Column {
    id: ColumnId; // Есть у всех!
    label: string; // Есть у всех!
    minWidth?: number;
    align?: ColumnAlign;
    format?: ColumnFormat;
}

// Константа, типизированная как массив объектов типа Column
const columns: Column[] = [
    { id: 'name', label: 'Name' },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

