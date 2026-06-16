function distinct (arr){
    let newArr = [];
    for (let num of arr){
        if (!newArr.includes(num)){
            newArr.push(num)
        }
    }
    console.log(newArr.join(' '));
}
distinct ([7, 8, 9, 7, 2, 3, 4, 1, 2])