var guestlist = ["altaf bhai", " Anwar Alam ", " Arif Massih  ", "Arshad Abdullah Vohra  "];
var dontcome = guestlist[3];
console.log(dontcome, "nhi a raha ho");
guestlist.splice(3, 3, " Abdul Rauf Siddiqui ");
console.log("good new ! we have a found begger table");
guestlist.unshift("ali baba");
guestlist.push("Abdul Haseeb");
var middleindex = (guestlist.length / 2);
guestlist.splice(middleindex, 2, " Fahim Ahmed  ");
console.log("updated list of our guests ");
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, " would you like nigth dinner with me? ")); });
console.log("unfortunately ,the new dinner table wnot arriveon on time so i can only invite tow dinner with me ");
while (guestlist.length > 2) {
    var removeguests = guestlist.pop();
    console.log("sory".concat(removeguests, "i cant invite you to dinner"));
}
console.log("invitation to last tow guest");
guestlist.forEach(function (lasttow) { return console.log("luckly ".concat(lasttow, ",you are still invited to dinner")); });
guestlist.pop();
guestlist.pop();
console.log("Empty list:", guestlist);
