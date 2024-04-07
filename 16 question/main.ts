let guestlist =["altaf bhai" ," Anwar Alam " , " Arif Massih  " , "Arshad Abdullah Vohra  "];

let dontcome =guestlist[3];

console.log(dontcome,"nhi a raha ho");

guestlist.splice(3,3," Abdul Rauf Siddiqui ");

console.log("good new ! we have a found begger table");

guestlist.unshift("ali baba");

guestlist.push("Abdul Haseeb");

let middleindex : number =(guestlist.length / 2);

guestlist.splice(middleindex, 2, " Fahim Ahmed  ");

console.log("updated list of our guests ");

guestlist.forEach(oneguest=> console.log(`salam${oneguest} would you like nigth dinner with me? `));
