function demo(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;

    let step = 1;
    let currentBase = base;

    while (currentBase > 2) {
        let stone = (currentBase - 2) * (currentBase - 2) * increment;
        let outerLayer = (currentBase * 4 - 4) * increment;

        if (step % 5 == 0) {
            totalLapis += outerLayer;
        } else {
            totalMarble += outerLayer
        }

        totalStone += stone;
        currentBase -= 2;
        step++;
    }
    totalGold = currentBase * currentBase * increment;
    let totalHeight = Math.floor(step * increment);

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}
// demo(11, 0.75)
// demo(12, 1)
demo(23, 0.5)