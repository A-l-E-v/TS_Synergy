type ColorHexCode = string;

interface VehicleParameters {
    type: string;
    weight: number;
    /* (1) */ // - Template Literal c первым символом # + ColorHexCode
    colorHex: `#${ColorHexCode}`;
    vin: string;
}

interface IVehicle extends VehicleParameters {
    getParametersForBoats: () => this | null; // (2)
}

class Vehicle<T extends VehicleParameters> implements IVehicle {
    type: string;
    weight: number;
    colorHex: `#${ColorHexCode}`; // (1)
    vin: string;

    //     /* (3) */
    constructor({ type, weight, colorHex, vin }: T) { // (4)
        this.type = type;
        this.weight = weight;
        this.colorHex = colorHex;
        this.vin = vin; // (5)
    }

    getParametersForBoats() {
        return this.type === 'boat' ? this : null;
    }
}

/**
 * Тестовые данные для проверки
 */
const boat = new Vehicle({
    type: 'boat',
    weight: 200,
    colorHex: '#00ff00',
    vin: '1234ABC5389DEF83958',
});
const parameters = boat.getParametersForBoats();
console.log('parameters', parameters);
/**
 * console.log выше выведет следующее
 *
 * "parameters", {
 * "type": "boat",
 * "weight": 200,
 * "colorHex": "#00ff00",
 * "vin": "1234ABC5389DEF83958"
 * }
 *
 */
const bike = new Vehicle({
    type: 'bike',
    weight: 12,
    colorHex: '#ffff00',
    vin: '5948ABC5389DEF832428',
});
const parameters2 = bike.getParametersForBoats();
console.log('parameters2', parameters2); // console.log выше выведет null


// -------------------- ЗАДАНИЕ ----------------------
// type ColorHexCode = string;
// interface VehicleParameters {
//     type: string;
//     weight: number;
//     colorHex: /* (1) */ // - Template Literal c первым символом # + ColorHexCode
//     vin: string;
// }
// interface IVehicle extends VehicleParameters {
//     getParametersForBoats: /* (2) */
// }
// class Vehicle<T extends VehicleParameters> implements IVehicle {
//     /* (3) */
//     constructor({ type, /* (4) */ }: T) {
//         /* (5) */
//         this.vin = vin;
//     }
//     getParametersForBoats() {
//         return this.type === 'boat' ? this : null
//     }
// }
// /**
// * Тестовые данные для проверки
// */
// const boat = new Vehicle({
//     type: 'boat',
//     weight: 200,
//     colorHex: '#00ff00',
//     vin: '1234ABC5389DEF83958',
// })
// const parameters = boat.getParametersForBoats()
// console.log('parameters', parameters)
// /**
// * console.log выше выведет следующее
// *
// "parameters", {
// "type": "boat",
// "weight": 200,
// "colorHex": "#00ff00",
// "vin": "1234ABC5389DEF83958"
// }
// *
// */
// const bike = new Vehicle({
//     type: 'bike',
//     weight: 12,
//     colorHex: '#ffff00',
//     vin: '5948ABC5389DEF832428',
// })
// const parameters2 = bike.getParametersForBoats()
// console.log('parameters2', parameters2) // console.log выше выведет null