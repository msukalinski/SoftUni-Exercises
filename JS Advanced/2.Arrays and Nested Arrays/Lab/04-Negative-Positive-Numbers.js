function demo(arr) {
    let result = [];

    for (let num of arr){
        if (num < 0){
            result.unshift(num);
        }else{
            result.push(num);
        }
    }
    for (let num of result){
        console.log(num);
    }
}
demo ([7, -2, 8, 9]);
// demo('9', 'dice', 'spice', 'chop', 'bake', 'fillet')