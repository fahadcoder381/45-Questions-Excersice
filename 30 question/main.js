var userName = ["mahad", "ali", "zeeshan", "admin", "usman"];
userName.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", thak you for logging in again."));
    }
});
