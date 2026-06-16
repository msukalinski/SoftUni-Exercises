function demo(spice) {
    let daysCount = 0;
    let totalSpice = 0;

    while (spice >= 100){
        totalSpice += spice;
        daysCount++;
        totalSpice -= 26;
        spice -= 10;
        // if (totalSpice < 26){
        //     totalSpice = 0;
        // }else{
        //     totalSpice -= 26;
        // }
    }
    if (totalSpice >= 26){
        totalSpice -= 26;
    }

    console.log(totalSpice);
    console.log(daysCount);
}
demo(111)
demo(450)