let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

make_great(magicians);
show_magicians(magicians);