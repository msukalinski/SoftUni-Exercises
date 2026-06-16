function demo(a = 5) {
    for (let i = 0; i < a; i++){
        const row = '* '.repeat(a);
        console.log(row.trim());
    }
}
demo()
// demo('name')