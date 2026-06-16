function demo(a, b, c) {
    let semi = 0.5 * (a + b + c);
    let area = Math.sqrt (semi * (semi - a) * (semi - b) * (semi - c));
    console.log(area);
}
demo(2, 3.5, 4)
demo(3, 5.5, 4)