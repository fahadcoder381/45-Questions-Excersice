let magicianName=["usman", "ali", "ayaz", "fayaz"];

let magicianNamescopy=[...magicianName]

function show_magician(greet:string){
    let withgreetings= "";

    for(let item of magicianNamescopy){
        withgreetings += `${greet} ${item}\n`;
    }
    return withgreetings;
};
let mygreetings = show_magician("hello");
let makeArray = mygreetings.split(`\n`)
console.log(makeArray)

// original array
console.log(magicianName)


