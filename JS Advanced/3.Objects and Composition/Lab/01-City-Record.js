function demo(city, population, treasury) {
    const obj = {
        name: city,
        population: population,
        treasury: treasury,
    }
    // console.log(obj);
    return obj;
}
demo('Tortuga', 7000, 15000);


//short hand syntax

// function demo(name, population, treasury) {
//     const obj = {
//         name,
//         population,
//         treasury,
//     }
//     console.log(obj);
//     // return obj;
// }
// demo('Tortuga', 7000, 15000);