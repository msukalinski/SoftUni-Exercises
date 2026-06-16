function digitEnglish (num){
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let lastDigit = Math.abs (num % 10);
    console.log(arr[lastDigit]);


    // let arr = ['zero', 'one', 'two', 'three', 'four', 'five','six','seven','eight','nine'];
    // let lastDigit = [...num.toString()].pop();

    // console.log(arr[lastDigit]);
}
digitEnglish (516)