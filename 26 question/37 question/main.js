function make_shirt(size, printgmessage) {
    if (size === void 0) { size = "large"; }
    if (printgmessage === void 0) { printgmessage = "I love typescrpit"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printgmessage, " prints on shirt"));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love javascript");
