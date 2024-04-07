let apple = "apple";
let uppercaseApple ="Apple";
let ten = 10;
let twenty = 20;
let fruits  =  ["apple", "banana", "orange"];



console.log("is apple equal to apple");
console.log(apple == "apple");

console.log("is apple is not equal to apple");
console.log("apple == apple");

console.log("Is APPLE is equal to APPLE  converting in lowercase");
console.log( uppercaseApple.toLowerCase() == "apple");

console.log("Is APPLE is equal to APPLE converting in lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");

console.log("ten is equal to twenty");
console.log(ten == 20);

console.log( "ten is not equal to twenty");
console.log(ten != 20);

console.log("ten is greter than twenty");
console.log(ten > 20);

console.log( "ten is less than twenty");
console.log(ten < 20);

console.log("ten is greter than or equal to 5");
console.log(ten >= 5);

console.log("twenty is less than or equal to ten");
console.log( 20 <= 10 );

console.log("twenty is  not equal to ten and twenty is greter than  10");
console.log( twenty != 10 && twenty > 10);


console.log("20 is greter than 50 or 20 is equal to 20");
console.log(20> 50 || 20 == 20);


console.log("20 is greter than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

console.log("is orange  include in my fruits array");
console.log(fruits .includes("orange"));

console.log("is orange not include in my fruits array");
console.log(!fruits .includes("orange"))

