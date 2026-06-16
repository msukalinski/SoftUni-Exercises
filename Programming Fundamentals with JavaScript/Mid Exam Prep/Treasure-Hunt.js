function treasureHunt(arr) {
    let chest = arr.shift().split('|');
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens.shift();
        if (command === 'Loot') {
            let items = tokens.filter(item => !chest.includes(item));
            for (let item of items) {
                chest.unshift(item);
            }
        } else if (command === 'Drop') {
            let position = Number(tokens.shift());
            if (position >= 0 && position < chest.length) {
                let removedItem = chest.splice(position, 1);
                chest.push(removedItem);
            }
        } else if (command === 'Steal') {
            let position = Number(tokens.shift());
            let stolenItems = chest.splice(-position);
            console.log(stolenItems.join(', '));
        } else if (command === 'Yohoho!') {
            break;
        }
    }
    if (chest.length === 0) {
        console.log('Failed treasure hunt.');
    } else {
        let totalGain = 0;
        for (let item of chest) {
            totalGain += item.length;
        }
        let avgGain = totalGain / chest.length;
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    }
}
// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins", "Loot Silver Pistol",
//     "Drop 3", "Steal 8", "Yohoho!"])
treasureHunt (["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])