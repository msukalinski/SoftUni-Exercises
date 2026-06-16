function subSum(arr, startIdx, endIdx) {
    if (!Array.isArray(arr)) {
        return NaN
    }
    if (startIdx < 0) {
        startIdx = 0;
    }
    if (endIdx < 0 || endIdx >= arr.length) {
        endIdx = arr.length - 1;
    }
    let result = arr.slice(startIdx, endIdx + 1)
        .reduce((a, b) => (Number(a) + Number(b)), 0);

    return result;
}
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);