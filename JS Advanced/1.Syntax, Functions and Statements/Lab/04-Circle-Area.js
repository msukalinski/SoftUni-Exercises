function demo (a){
    if (typeof(a) === 'number'){
        console.log((Math.PI * a * a).toFixed(2));
    }else{
        let type = typeof(a)
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}