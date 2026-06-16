function hunting (arr){
    let days = arr.shift();
    let peopleCount = Number(arr.shift());
    let groupEnergy = Number(arr.shift());
    let waterPerDay = Number(arr.shift());
    let foodPerDay = Number(arr.shift());
    let totalWater = peopleCount * waterPerDay * days;
    let totalFood = peopleCount * foodPerDay * days;
    for (let i = 1; i <= days; i++){
        groupEnergy -= Number(arr.shift());
        if (groupEnergy <= 0){
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }
        if (i % 2 === 0){
            totalWater *= 0.7 ;
            groupEnergy *= 1.05;
        }
        if (i % 3 === 0){
            totalFood -= totalFood / peopleCount;
            groupEnergy *= 1.1;
        }
    }
    console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
}
hunting (["10", 
"7", 
"5035.5", 
"11.3", 
"7.2", 
"942.3", 
"500.57", 
"520.68", 
"540.87", 
"505.99", 
"630.3", 
"784.20", 
"321.21", 
"456.8", 
"330"])
hunting(["12", 

"6", 

"4430", 

"9.8", 

"5.5", 

"620.3", 

"840.2", 

"960.1", 

"220", 

"340", 

"674", 

"365", 

"345.5", 

"212", 

"412.12", 

"258", 

"496"])