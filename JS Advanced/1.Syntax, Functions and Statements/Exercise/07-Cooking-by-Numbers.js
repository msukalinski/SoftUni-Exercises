function demo(a, b, c, d, e, f) {
    let num = Number(a);

    let commands = [b, c, d, e, f];

    for (let command of commands) {
        if (command === 'chop') {
            num /= 2;
            console.log(num);
        } else if (command === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        } else if (command === 'spice') {
            num++;
            console.log(num);
        } else if (command === 'bake') {
            num *= 3;
            console.log(num);
        } else if (command === 'fillet') {
            num *= 0.8;
            console.log(num);
        }
    }
}
// demo('32', 'chop', 'chop', 'chop', 'chop', 'chop')
demo('9', 'dice', 'spice', 'chop', 'bake', 'fillet')