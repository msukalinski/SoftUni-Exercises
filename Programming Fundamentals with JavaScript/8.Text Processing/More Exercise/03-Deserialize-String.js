function demo(arr) {
    let result = [];

    for (const line of arr) {
        if (line === 'end') break;
        const [letter, indices] = line.split(':');
        const positions = indices.split('/').map(Number);
        
        for (const pos of positions) {
            result[pos] = letter;
        }
    }
    console.log(result.join(''));
}

demo(['a:0/2/4/6', 'b:1/3/5', 'end']);
// demo(['AC/DC', 'UPPERCASE'])