function degustationParty(arr) {
    let list = {};
    let dislike = 0;
    for (current of arr) {
        if (current == 'Stop') {
            break;
        }
        let [command, name, meal] = current.split('-');
        if (command == 'Like') {
            if (!list[name]) {
                list[name] = {
                    meal: new Set(),
                }
            }
                list[name].meal.add(meal);
        } else if (command == 'Dislike') {
            if (!list[name]){
                console.log(`${name} is not at the party.`);
            }else{
                if (list[name].meal.has(meal)){
                    list[name].meal.delete(meal);
                    console.log(`${name} doesn't like the ${meal}.`);
                    dislike++;
                }else{
                    console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                }
            }
        }
    }
    for (let [name, guest] of Object.entries(list)){
        let newArr = []
        for (meal of guest.meal){
            newArr.push(meal)
        }
        console.log(`${name}: ${newArr.join(', ')}`);
        // console.log(`${name}: ${[...guest.meal].join(', ')}`);
    }
    console.log(`Unliked meals: ${dislike}`);
}
degustationParty(["Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"]) 