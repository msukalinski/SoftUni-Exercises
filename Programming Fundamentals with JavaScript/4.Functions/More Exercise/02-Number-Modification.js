function demo(num) {
    num = num.toString().split('');
    let avg = 0;

    while (avg <= 5) {
        let sum = 0;
        for (let n of num) {
            sum += Number(n);
        }
        avg = sum / num.length;
        if (avg <= 5) {
            num.push('9');
        }
    }

    console.log(num.join(''));
}
demo(19);
demo(5835);