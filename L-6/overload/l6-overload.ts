function getUserLocation(latitude: number, longitude: number, callback: Function): void;

function getUserLocation(country: string, city: string, street: string, callback: Function): void;

function getUserLocation(arg1: any, arg2: any, arg3?: any, arg4?: any): void {

    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        // Обработка числовых значений широты и долготы
        const locationMessage = `latitude: ${arg1}, longitude: ${arg2}`;
        if (arg3 instanceof Function) {
            arg3(locationMessage);
        }
        
    } else if (typeof arg1 === 'string' && typeof arg2 === 'string' && typeof arg3 === 'string') {
        // Обработка строковых значений страны, города и улицы
        const locationMessage = `location is: ${arg1}, ${arg2}, ${arg3}`;
        if (arg4 instanceof Function) {
            arg4(locationMessage);
        }
    }
}

// Примеры использования
const location1 = getUserLocation(55.45, 37.37, (location) => {
    console.log(location); // "latitude: 55.45, longitude: 37.37"
});
const location2 = getUserLocation('Russia', 'Taganrog', 'Petrovskaya 51', (location) => {
    console.log(location); // "location is: Russia, Taganrog, Petrovskaya 51"
});
