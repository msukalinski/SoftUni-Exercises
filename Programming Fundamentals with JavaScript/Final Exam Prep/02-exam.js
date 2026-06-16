function bossRush (arr){
    let count = Number(arr.shift());
    let list = [];
    let pattern = /(\|)(?<name>[A-Z]{4,})\1\:(\#)(?<title>[A-Za-z]+\ [A-Za-z]+)\3/;
    for (let i = 0; i < count; i++){
        let strength = 0;
        let armor = 0;
        let match = arr[i].match(pattern);
        if (match){
            console.log(`${match.groups.name}, The ${match.groups.title}\n>> Strength: ${(match.groups.name).length}\n>> Armor: ${match.groups.title.length}`);
        }else{
            console.log('Access denied!');
        }
    }
}
bossRush((['3', 
'|PETER|:#Lead architect#', 
'|GEORGE|:#High Overseer#', 
'|ALEX|:#Assistant Game Developer#']) )