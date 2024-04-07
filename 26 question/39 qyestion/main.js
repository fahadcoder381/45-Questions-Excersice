function city_country(city, country) {
    return "\"".concat(city, "\" , \"").concat(country, "\"");
}
var city1 = city_country("karachi", "pakistan");
var city2 = city_country("lahore ", "pakistan");
var city3 = city_country("hyderabad", "pakistan");
console.log(city1);
console.log(city2);
console.log(city3);
