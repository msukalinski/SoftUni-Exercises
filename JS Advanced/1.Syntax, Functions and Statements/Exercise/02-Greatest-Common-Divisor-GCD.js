function demo(a, b) {
    let maxDivisor = 0;
    for (let i = 1; i <= Math.min(a, b); i++){
        if (a % i === 0 && b % i === 0){
            if (maxDivisor < i){
                maxDivisor = i;
            }
        }
    }
    console.log(maxDivisor);
}
demo(2154, 458)
// demo('name')