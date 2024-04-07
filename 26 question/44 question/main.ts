function mysandwiches(...items:string[]){
    return `I want sandwiche of ${items}`;
};

let collection1 =mysandwiches("ham", "cheeze", "lettuce");

let collection2 = mysandwiches("turkey", "swiss");
let collection3 =mysandwiches();

console.log(collection1);
console.log(collection2);
console.log(collection3);