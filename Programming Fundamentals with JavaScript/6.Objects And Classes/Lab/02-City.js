function cityInfo (info){
    for (let key of Object.keys(info)){
        console.log(`${key} -> ${info[key]}`);
    }
    for (let [key, value] of Object.entries(info)){
        console.log(`${key} -> ${value}`);
    }
}
cityInfo ({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
    })