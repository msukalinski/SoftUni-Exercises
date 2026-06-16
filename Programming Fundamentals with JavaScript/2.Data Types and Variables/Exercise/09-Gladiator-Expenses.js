function demo(fightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let total = 0;
    let shieldCount = 0;

    for (let i = 1; i <= fightsCount; i++){
        let helmetBroken = false;
        let swordBroken = false;

        if (i % 2 == 0){
            total += helmetPrice;
            helmetBroken = true;
        }
        if (i % 3 == 0){
            total += swordPrice;
            swordBroken = true;
        }
        if (helmetBroken && swordBroken){
            total += shieldPrice;
            shieldCount++;

            if (shieldCount % 2 == 0){
                total += armorPrice;
            }
        }
    }
    console.log(total.toFixed(2));
}
demo(23, 12.5, 21.5, 40, 200)
demo(7, 2, 3, 4, 5)