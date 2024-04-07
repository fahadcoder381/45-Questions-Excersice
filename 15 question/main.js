var guestlist = ["altaf bhai", "usman", "ali", "hamza"];
var dontcome = guestlist[3];
console.log(dontcome, "nhi a raha ho");
guestlist.splice(3, 3, "ammar");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, " would you like to dinner with me?")); });
