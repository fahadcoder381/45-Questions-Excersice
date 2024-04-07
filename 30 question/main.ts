let userName =["mahad", "ali", "zeeshan", "admin", "usman" ];

userName.forEach(oneuser =>{
    if(oneuser === "admin"){
        console.log(`Hello ${oneuser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneuser}, thak you for logging in again.`)
    }
})