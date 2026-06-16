function heroInventory (arr){
    let heroes = [];
    for (let heroData of arr){
        let [name, lvl, itemsStr] = heroData.split (' / ');
        let items = itemsStr ? itemsStr.split(', '):[];
        let hero = {
            name: name,
            level: Number(lvl),
            items: items,
        };
        heroes.push(hero);
    }
    let sorted = heroes.sort ((a, b) => a.level - b.level);
    for (let hero of sorted){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}
heroInventory ([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])