function demo(number) {
    let isPrime = true;
    if (number < 2){
        isPrime = false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i == 0){
            isPrime = false;
        }
    }
    console.log(isPrime);
}
demo(9)
demo(7)