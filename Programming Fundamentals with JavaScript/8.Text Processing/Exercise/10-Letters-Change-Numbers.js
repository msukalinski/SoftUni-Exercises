function demo(arr) {
    const strings = arr.trim().split(/\s+/);
    let totalSum = 0;

    strings.forEach(str => {
        const firstLetter = str[0];
        const lastLetter = str[str.length - 1];
        const number = parseInt(str.slice(1, -1), 10);

        let result = number;

        if (firstLetter >= 'A' && firstLetter <= 'Z') {
            const position = firstLetter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
            result /= position;
        } else if (firstLetter >= 'a' && firstLetter <= 'z') {
            const position = firstLetter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
            result *= position;
        }

        if (lastLetter >= 'A' && lastLetter <= 'Z'){
            const position = lastLetter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
            result -= position;
        }else if (lastLetter >= 'a' && lastLetter <= 'z'){
            const position = lastLetter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
            result += position;
        }

        totalSum += result;
    });
    console.log(totalSum.toFixed(2));
}

demo('A12b s17G');
demo('a1A');
// demo()