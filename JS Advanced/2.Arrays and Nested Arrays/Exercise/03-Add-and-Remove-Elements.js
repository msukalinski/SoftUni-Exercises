function demo(input) {
    let num = 1;
    let arr = [];
    for (const command of input) {
        command === 'add' ? arr.push(num) : arr.pop();
        num++;
    }
    arr.length !== 0 ?
        arr.forEach(num => console.log(num)) :
        console.log('Empty');
}

demo(['add', 'add', 'remove', 'add', 'add']);
// demo([
// 'add',
// 'remove',
// 'add']);