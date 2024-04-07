function make_album(artist, title, tracks) {
    return { artist: artist, title: title, tracks: tracks };
}
// Creating albums
var album1 = make_album("Atif Aslam", "Doorie");
var album2 = make_album("Arijit Singh", "Tum Hi Ho");
var album3 = make_album("Ali Zafar", "Jugnu", 10);
// Printing albums
console.log(album1);
console.log(album2);
console.log(album3);
