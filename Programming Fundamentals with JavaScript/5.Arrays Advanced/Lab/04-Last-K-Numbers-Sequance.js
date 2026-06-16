function lastNumsSequance(n, k) {
    let sequence = [1];
    for (let index = 1; index < n; index++) {
        let i = Math.max(sequence.length - k, 0);
        let lastElements = sequence.slice(i);
        let sum = 0;
        for (let el of lastElements) {
            sum += el;
        }
        sequence.push(sum);
    }
    console.log(sequence.join(' '));
}
lastNumsSequance(30, 3)