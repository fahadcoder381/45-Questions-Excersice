let magicianName=["usman", "ali", "ayaz", "fayaz"];

function show_magician(greet:string){

    for(let item of magicianName){
        console.log(greet,item);
    }
};

show_magician("hello , how are you mr.");
show_magician("hello");
