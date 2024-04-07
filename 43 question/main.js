var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function make_great(magicians) {
    var newMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        newMagicians.push("the Great ".concat(magician));
    }
    return newMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var greatMagicians = make_great(magicians.slice()); // Create a copy of the original array
show_magicians(magicians);
console.log("\n"); // Print a newline for separation
show_magicians(greatMagicians);
