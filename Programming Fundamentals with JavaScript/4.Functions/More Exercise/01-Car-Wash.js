function demo(input) {
    let clean = 0;

    for (let command of input) {
        switch (command) {
            case 'soap':
                clean += 10;
                break;
            case 'water':
                clean *= 1.2;
                break;
            case 'vacuum cleaner':
                clean *= 1.25;
                break;
            case 'mud':
                clean *= 0.9;
                break;
        }
    }
    console.log(`The car is ${clean.toFixed(2)}% clean.`);
}
demo(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
demo(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
// demo(6)
// demo(28)