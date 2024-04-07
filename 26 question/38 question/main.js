function describe_city(name_city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log(" ".concat(name_city, " is in ").concat(country, " "));
}
describe_city("karachi");
describe_city("larkana");
describe_city("hyderabad");
describe_city("dubai", "UAE");
