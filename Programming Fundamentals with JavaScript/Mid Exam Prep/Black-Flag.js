function blackFlag (arr){
    let [days, daily, goal] = arr.map(Number);
    let total = 0;
    for (i = 1; i <= days; i++){
        total += daily;
        if (i % 3 === 0){
            total += daily * 0.5;
        }
        if (i % 5 === 0){
            total *= 0.7;
        }
    }
    if (total >= goal){
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    }else{
        let collected = (total / goal) * 100;
        console.log(`Collected only ${collected.toFixed(2)}% of the plunder.`);
    }
}
blackFlag (["5", "40", "154"])
blackFlag (["10", "20", "380"])