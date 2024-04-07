var magicianName = ["usman", "ali", "ayaz", "fayaz"];
function show_magician(greet) {
    for (var _i = 0, magicianName_1 = magicianName; _i < magicianName_1.length; _i++) {
        var item = magicianName_1[_i];
        console.log(greet, item);
    }
}
;
show_magician("hello , how are you mr.");
show_magician("hello");
