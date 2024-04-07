let guestlist =["altaf bhai" ,"usman" , "ali" , "hamza"];

let dontcome =guestlist[3];

console.log(dontcome,"nhi a raha ho");

guestlist.splice(3,3,"ammar");

guestlist.forEach(guest => console.log(`salam ${guest} would you like to dinner with me?`) );