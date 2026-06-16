function bombNums (arr, info){
    let [special, power] = info;
    while (arr.includes(special)){
        let index = arr.indexOf(special);
        arr.splice(Math.max(index - power, 0), power * 2 + 1, 0)
    }
    let sum = arr.reduce((acc, value) => acc + value);
    console.log(sum);
}
bombNums ([1, 1, 2, 1, 1, 1,

    2, 1, 1, 1],
    
    [2, 1])