function counterStrike (arr){
    let energy = Number (arr.shift());
    let count = 0;
    for (let token of arr){
        tokentoNum = Number (token);
        if (count % 3 === 0){
            energy += count;
        }
        if (energy < tokentoNum){
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            return;
        }
        if (token === 'End of battle'){
            console.log(`Won battles: ${count}. Energy left: ${energy}`);
            break;
        }
        energy -= tokentoNum;
        count++;
    }
}
counterStrike (["54", "54", "End of battle"]) 
counterStrike (["100", "10", "10", "10", "1", "2", "3", "73", "10"]) 
counterStrike (["200", 

"54", 

"14", 

"28", 

"13", 

"End of battle"])