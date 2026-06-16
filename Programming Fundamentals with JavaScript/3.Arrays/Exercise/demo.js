function demo(arr, magic) {
    for (let i = 0; i < arr.length; i++){
        let currDigits = [];
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === magic){
                currDigits.push(arr[i], arr[j]);
                console.log(currDigits.join(' '));
                break;
            }
        }
    }
}
demo([1, 7, 6, 2, 19, 23],

    8)