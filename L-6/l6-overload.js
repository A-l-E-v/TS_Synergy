function getUserLocation(arg1, arg2, arg3, arg4) {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        // Обработка числовых значений широты и долготы
        var locationMessage = "latitude: ".concat(arg1, ", longitude: ").concat(arg2);
        if (arg3 instanceof Function) {
            arg3(locationMessage);
        }
    }
    else if (typeof arg1 === 'string' && typeof arg2 === 'string' && typeof arg3 === 'string') {
        // Обработка строковых значений страны, города и улицы
        var locationMessage = "location is: ".concat(arg1, ", ").concat(arg2, ", ").concat(arg3);
        if (arg4 instanceof Function) {
            arg4(locationMessage);
        }
    }
}
// Примеры использования
var location1 = getUserLocation(55.45, 37.37, function (location) {
    console.log(location); // "latitude: 55.45, longitude: 37.37"
});
var location2 = getUserLocation('Russia', 'Taganrog', 'Petrovskaya 51', function (location) {
    console.log(location); // "location is: Russia, Taganrog, Petrovskaya 51"
});
