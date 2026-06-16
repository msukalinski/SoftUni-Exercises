function demo(a, b) {
    let result = 0;
    a = Number(a);
    b = Number(b);
    for (let num = a; num <= b; num++){
        result += num;
    }
    console.log(result);
}
demo('1', '5')
// demo('name')