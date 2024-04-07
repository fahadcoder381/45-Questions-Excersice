var userName = ["mahad", "ali", "zeeshan", "admin", "usman",];
if (userName.length === 0) {
    console.log("your Array in Empty we need to find some users!");
}
else {
    userName.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("hello".concat(oneuser, ", would you like to see  status report?"));
        }
        else {
            console.log("hello ".concat(oneuser, ", thak you for logging in again"));
        }
    });
}
