function demo(arr) {
    let health = 100;
    let coins = 0;
    let count = 1;

    let rooms = arr[0].split('|');
    for (const room of rooms) {
        let [itemOrMonster, value] = room.split(' ');
        value = Number(value);

        if (itemOrMonster == 'potion') {
            let healedFor = Math.min(value, 100 - health);
            health += healedFor;
            console.log(`You healed for ${healedFor} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (itemOrMonster == 'chest') {
            console.log(`You found ${value} coins.`);
            coins += value;
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${count}`);
                return;
            }
        }
        count++;
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
// demo(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
demo(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);