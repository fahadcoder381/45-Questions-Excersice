var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countiestovisit = ["china", "korea", "russia", "argentina"];
console.log("orginal order:", countiestovisit);
console.log("Alphabetical order:", __spreadArray([], countiestovisit, true).sort());
console.log("still in orginal order:", countiestovisit);
console.log("Reverse order:", __spreadArray([], countiestovisit, true).reverse());
console.log("still in orginal order:", countiestovisit);
console.log("orginal Array Reversed:", countiestovisit.reverse());
console.log("back to orgianl order:", countiestovisit.reverse());
console.log("sroted in alphabetical order:", countiestovisit.sort());
console.log("orginal Array Reversed:", countiestovisit.reverse());
