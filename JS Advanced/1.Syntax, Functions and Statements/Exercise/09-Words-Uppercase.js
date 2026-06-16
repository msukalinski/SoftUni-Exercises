function demo(str) {
    let text = str.toUpperCase();
    let pattern = /[\w]+/g;
    let matches = text.match(pattern);
    let arr = [];
    for (const match of matches){
        arr.push(match);
    }
    console.log(arr.join(', '));
}
demo('Hi, how are you?')
// demo('9', 'dice', 'spice', 'chop', 'bake', 'fillet')