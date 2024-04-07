function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A ".concat(size, " shirt will be printed with the message: \"").concat(message, "\"."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Hello, coder!");
