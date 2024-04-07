function myalbum(artisname: string ,albumtitle:string){
    return {artisname , albumtitle};
}
let album1 = myalbum("ali ", "rang_e_mohabat");
let album2 = myalbum("madad", "roshan andhera");
let album3 = myalbum("ayaz", "mausam_e_dil");

console.log (album1);
console.log(album2);
console.log(album3);




function myalbum2(artisname: string , albumtitle : string,
    numberoftracks? : number){
        return {artisname , albumtitle , numberoftracks};
    }

    let album4 = myalbum2("Ali", "Rang-e-mohabat", 30);
    let album5 = myalbum2("Madad", "Roshan Andhera", 55);
    let album6 = myalbum2("Ayaz", "Mausam-e-Dil");

    console.log(album4);
    console.log(album5);
    console.log(album6);