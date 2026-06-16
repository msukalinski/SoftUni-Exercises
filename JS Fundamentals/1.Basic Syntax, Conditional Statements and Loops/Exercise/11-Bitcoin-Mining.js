function demo(arr) {
    const PRICE_OF_GOLD = 67.51;
    const PRICE_OF_BTC = 11949.16;

    let daysCount = 0;
    let totalMoney = 0;
    let firstPurchase = 0;
    let btcCount = 0;

    for (let i = 0; i < arr.length; i++){
        daysCount++;
        let currentGold = Number(arr[i]);
        if (daysCount % 3 == 0){
            currentGold *= 0.7;
        }

        let currentMoney = currentGold * PRICE_OF_GOLD;
        totalMoney += currentMoney;
        
        while (totalMoney >= PRICE_OF_BTC){
            totalMoney -= PRICE_OF_BTC;
            btcCount++;
            if (btcCount == 1){
                firstPurchase = daysCount;
            }
        }
    }
    console.log(`Bought bitcoins: ${btcCount}`);
    if (firstPurchase !== 0){
        console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
demo([100, 200, 300])
// demo([50, 100])
// demo([3124.15, 504.212, 2511.124])