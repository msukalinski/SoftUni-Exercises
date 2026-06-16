// function demo(arr) {
//     let first = Number(arr.shift());
//     let last = Number(arr.pop());
//     let res = first + last;
//     console.log(res);
// }

function demo(arr) {
    let res = Number(arr.shift()) + Number(arr.pop());
    
    console.log(res);
}
demo (['20', '30', '40']);
// demo('9', 'dice', 'spice', 'chop', 'bake', 'fillet')