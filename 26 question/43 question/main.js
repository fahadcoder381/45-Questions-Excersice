var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianName = ["usman", "ali", "ayaz", "fayaz"];
var magicianNamescopy = __spreadArray([], magicianName, true);
function show_magician(greet) {
    var withgreetings = "";
    for (var _i = 0, magicianNamescopy_1 = magicianNamescopy; _i < magicianNamescopy_1.length; _i++) {
        var item = magicianNamescopy_1[_i];
        withgreetings += "".concat(greet, " ").concat(item, "\n");
    }
    return withgreetings;
}
;
var mygreetings = show_magician("hello");
var makeArray = mygreetings.split("\n");
console.log(makeArray);
// original array
console.log(magicianName);
