function demo(arr) {
    let uniqueArrays = new Map();

    for (let line of arr){
        let currentArray = JSON.parse(line).map(Number).sort((a, b) => b - a);
        let key = currentArray.join(',');

        if (!uniqueArrays.has(key)){
            uniqueArrays.set(key, currentArray);
        }
    }

    let sortedArrays = Array.from(uniqueArrays.values()).sort((a, b) => a.length - b.length);

    for (let line of sortedArrays){
        console.log(`[${line.join(', ')}]`);
    }
}
demo(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]);
demo(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"])