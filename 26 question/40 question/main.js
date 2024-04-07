function myalbum(artisname, albumtitle) {
    return { artisname: artisname, albumtitle: albumtitle };
}
var album1 = myalbum("ali ", "rang_e_mohabat");
var album2 = myalbum("madad", "roshan andhera");
var album3 = myalbum("ayaz", "mausam_e_dil");
console.log(album1);
console.log(album2);
console.log(album3);
function myalbum2(artisname, albumtitle, numberoftracks) {
    return { artisname: artisname, albumtitle: albumtitle, numberoftracks: numberoftracks };
}
var album4 = myalbum2("Ali", "Rang-e-mohabat", 30);
var album5 = myalbum2("Madad", "Roshan Andhera", 55);
var album6 = myalbum2("Ayaz", "Mausam-e-Dil");
console.log(album4);
console.log(album5);
console.log(album6);
