var current_users = ["Zohaib", "Usman", "Saad", "Zain", "Osman"];
var new_users = ["Fahad", "Ayesha", "Zohaib", "Mahad", "Saad"];
new_users.forEach(function (new_one_users) {
    var our_conditin = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_users.toLowerCase(); });
    if (our_conditin) {
        console.log("sorry ".concat(new_one_users, " is alread taken!"));
    }
    else {
        console.log("this username ".concat(new_one_users, " is available"));
    }
});
