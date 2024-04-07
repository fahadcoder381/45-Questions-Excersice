var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, model, options) {
    return __assign({ manufacturer: manufacturer, model: model }, options);
}
// Example usage
var myCar = createCar("Toyota", "Camry", { color: "blue", year: 2022 });
console.log(myCar);
