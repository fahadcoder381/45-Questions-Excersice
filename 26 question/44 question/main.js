function mysandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want sandwiche of ".concat(items);
}
;
var collection1 = mysandwiches("ham", "cheeze", "lettuce");
var collection2 = mysandwiches("turkey", "swiss");
var collection3 = mysandwiches();
console.log(collection1);
console.log(collection2);
console.log(collection3);
