function maxNum (arr){
    let topInt = [];
    for (let index = 0; index < arr.length; index++){
        let isTop = true;
        for (let j = index + 1; j < arr.length; j++){
            if (arr[index] <= arr[j]){
                isTop = false;
                break;
            }
        }
        if (isTop){
            topInt.push(arr[index]);
        }
    }
    console.log(topInt.join(' '));
}
maxNum ([1, 4, 3, 2])