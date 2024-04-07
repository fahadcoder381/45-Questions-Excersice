interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, options: {[key: string]: any}): Car {
    return { manufacturer, model, ...options };
}

// Example usage
const myCar = createCar("Toyota", "Camry", { color: "blue", year: 2022 });
console.log(myCar);