function orderSandwich(...items: string[]): void {
    console.log("Sandwich order:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
}

// Call the function with different numbers of arguments
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
orderSandwich("Ham", "Cheese");
orderSandwich("Peanut Butter", "Jelly");