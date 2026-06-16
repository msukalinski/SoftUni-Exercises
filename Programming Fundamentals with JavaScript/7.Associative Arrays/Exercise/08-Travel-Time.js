function demo(arr) {
    let destinations = new Map;

    for (let line of arr) {
        let [country, town, cost] = line.split(' > ');
        cost = Number(cost);

        if (!destinations.has(country)) {
            destinations.set(country, new Map());
        }

        let towns = destinations.get(country);

        if (!towns.has(town) || towns.get(town) > cost) {
            towns.set(town, cost);
        }
    }

    let sortedCountries = Array.from(destinations)
    .sort(([countryA], [countryB]) => countryA.localeCompare(countryB));

    for (let [country, towns] of sortedCountries) {
        let sortedTowns = Array.from(towns)
            .sort(([, costA], [, costB]) => costA - costB);

            let townsInfo = '';
            for (let [town, cost] of sortedTowns){
                townsInfo += `${town} -> ${cost} `;
            }
            console.log(`${country} -> ${townsInfo}`);
    }
}

demo([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
// demo()