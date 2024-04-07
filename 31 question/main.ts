let userName = ["mahad",  "ali",  "zeeshan",  "admin", "usman",];

if (userName.length === 0){
    console.log("your Array in Empty we need to find some users!")
}else{
    userName.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`hello${oneuser}, would you like to see  status report?`)
    }else {
        console.log(`hello ${oneuser}, thak you for logging in again`)
    }  
})
}