function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    return { artist: artist, title: title, tracks: tracks };
}

let album1 = make_album("Atif Aslam", "Doorie");
let album2 = make_album("Arijit Singh", "Tum Hi Ho");
let album3 = make_album("Ali Zafar", "Jugnu", 10);

console.log(album1);
console.log(album2);
console.log(album3);