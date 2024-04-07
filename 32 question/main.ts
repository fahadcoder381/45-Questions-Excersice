let current_users =["Zohaib", "Usman", "Saad", "Zain", "Osman"];

let new_users = ["Fahad", "Ayesha", "Zohaib", "Mahad", "Saad"];

new_users.forEach(new_one_users =>{
    let our_conditin = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase());
    if(our_conditin){
        console.log(`sorry ${new_one_users} is alread taken!`);
    }else{
        console.log(`this username ${new_one_users} is available`);
    }

})
