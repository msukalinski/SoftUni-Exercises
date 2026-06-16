function demo(arr) {
    let string = arr[0];
    let result = new Map();

    for (let index = 0; index < string.length; index++){
        const char = string[index];
        if (!result.has(char)){
            result.set(char, []);
        }
        result.get(char).push(index);
    }
    let serialized = [];

    for (const [char, indices] of result){
        serialized.push(`${char}:${indices.join('/')}`)
    }
    console.log(serialized.join('\n'));
}

demo(["abababa"]);
// demo(['AC/DC', 'UPPERCASE'])