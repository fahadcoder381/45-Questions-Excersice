function make_shirt (size : string = "large" ,  printgmessage :string = "I love typescrpit"){
    console.log(`creating a ${size} shirt with the ${printgmessage} prints on shirt`)
}

make_shirt ();

make_shirt("medium");

make_shirt("small" , "I love javascript");