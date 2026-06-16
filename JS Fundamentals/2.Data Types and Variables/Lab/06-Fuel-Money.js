function requiredMoney (distance, passengers, pricePerLiter){
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.1;
    let money = neededFuel * pricePerLiter    ;
    console.log(`Needed money for that trip is ${money} lv`);
}
requiredMoney (90, 14, 2.88)