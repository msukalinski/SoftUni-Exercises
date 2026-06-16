function demo(input) {
    let maxNum = Number.MIN_SAFE_INTEGER;

    let result = input.filter(num => {
        if (num >= maxNum){
            maxNum = num;
            return true;
        }
        return false;
    });

    console.log(result.join(' '));
}
demo([1, 3, 8, 4, 10, 12, 3, 2, 24]);
demo([1, 2, , 3, 4]);