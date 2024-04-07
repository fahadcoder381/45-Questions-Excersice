function describe_city (name_city :string , country :string = "pakistan"){
    console.log(` ${name_city} is in ${country} `);
}

describe_city("karachi");
describe_city("larkana");
describe_city("hyderabad");
describe_city("dubai","UAE");