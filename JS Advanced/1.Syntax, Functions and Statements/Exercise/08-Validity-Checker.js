function demo(x1, y1, x2, y2) {
    function calculate (x1, y1, x2, y2){
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isValid (distance){
        return Number.isInteger(distance);
    }

    const distance1 = calculate (x1, y1, 0, 0);
    const distance2 = calculate (x2, y2, 0, 0);
    const distance3 = calculate (x1, y1, x2, y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(distance1) ? "valid" : "invalid"}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid(distance2) ? "valid" : "invalid"}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(distance3) ? "valid" : "invalid"}`);
}
demo(3, 0, 0, 4)
// demo('9', 'dice', 'spice', 'chop', 'bake', 'fillet')