function demo(arr, step) {
    let result = arr.filter((str, index) => index % step === 0);
    // console.log(result);
    return result;
}
demo(['5',
'20',
'31',
'4',
'20'],
2);