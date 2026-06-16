function demo(a, b, c) {
    let result = a + b + c;
    // let isInteger = result % 1 == 0;
    // if (isInteger){
    //     console.log(`${result} - Integer`);
    // }else{
    //     console.log(`${result} - Float`);
    // }

    result % 1 == 0 ? result += ' - Integer' : result += ' - Float';
    console.log(result);
}
demo (100, 200, 303)