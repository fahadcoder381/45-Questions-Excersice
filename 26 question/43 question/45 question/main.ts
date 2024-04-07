function carDetails(manufacturer:string , modelname:string, ...additionalInfo){
    const car ={manufacturer,modelname, ...Object.fromEntries
        (additionalInfo)};
        return car;
};

const mycarDetails = carDetails("toyota", "corolla", ['color', 'blue'],
['year', 2022]);

console.log(mycarDetails);