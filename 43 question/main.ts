let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

function make_great(magicians: string[]): string[] {
    let newMagicians: string[] = [];
    for (let magician of magicians) {
        newMagicians.push(`the Great ${magician}`);
    }
    return newMagicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let greatMagicians: string[] = make_great(magicians.slice()); // Create a copy of the original array
show_magicians(magicians);
console.log("\n"); // Print a newline for separation
show_magicians(greatMagicians);