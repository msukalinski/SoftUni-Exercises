function demo(digit) {
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    if (arr.hasOwnProperty(digit)){
        console.log(arr[digit]);
    }else{
        console.log('Invalid input');
    }
}
demo(9)
demo(-5)