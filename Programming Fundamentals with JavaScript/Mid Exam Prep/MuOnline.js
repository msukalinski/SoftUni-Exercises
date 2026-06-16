function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let rooms = input.split('|');
    for (let index = 0; index < rooms.length; index++) {
        let curRoom = rooms[index].split(' ');
        let command = curRoom[0];
        let points = Number(curRoom[1])
        if (command === 'potion') {
            if (health + points > 100) {
                points = 100 - health;
            }
            health += points;
                console.log(`You healed for ${points} hp.`);
                console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            bitcoins += points;
            console.log(`You found ${points} bitcoins.`);
        } else {
            health -= points;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${index + 1}`);
                return;
            }
        }
    }
    console.log('You\'ve made it!');
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")