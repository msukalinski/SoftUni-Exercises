function pirates(input) {
    let cities = {};
    let citiesArr = [];
    while (input[0] !== 'Sail') {
        let command = input.shift().split('||');
        let city = command[0];
        let population = Number(command[1]);
        let gold = Number(command[2]);
        let result = citiesArr.find(e => e.city == city);
        let index = citiesArr.indexOf(result);
        if (result) {
            citiesArr[index].population += population;
            citiesArr[index].gold += gold;
        } else {
            cities = { city, population, gold };
            citiesArr.push(cities);
        }
    }
    while (input[0] != 'End') {
        let tokens = input.shift().split('=>');
        let command = tokens.shift();
        switch (command) {
            case 'Plunder':
                let cityName = tokens[0];
                let people = Number(tokens[1]);
                let gold = Number(tokens[2]);
                console.log(`${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                let result = citiesArr.find(e => e.city == cityName);
                let index = citiesArr.indexOf(result);
                citiesArr[index].population -= people;
                citiesArr[index].gold -= gold;
                if (citiesArr[index].population <= 0 || citiesArr[index].gold <= 0) {
                    citiesArr.splice(index, 1);
                    console.log(`${cityName} has been wiped off the map!`);
                }
                break;
            case 'Prosper':
                let town = tokens[0];
                let treasure = Number(tokens[1]);
                if (treasure < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    let result = citiesArr.find(e => e.city == town);
                    let index = citiesArr.indexOf(result);
                    citiesArr[index].gold += treasure;
                    console.log(`${treasure} gold added to the city treasury. ${town} now has ${citiesArr[index].gold} gold.`);
                }
                break;
        }
    }
    if (citiesArr.length == 0){
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }else{
        console.log(`Ahoy, Captain! There are ${citiesArr.length} wealthy settlements to go to:`);
        citiesArr.forEach(t => console.log(`${t.city} -> Population: ${t.population} citizens, Gold: ${t.gold} kg`));
    }
}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
    // pirates(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"])