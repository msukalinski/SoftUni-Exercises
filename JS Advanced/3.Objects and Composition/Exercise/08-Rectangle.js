function demo(width, height, color) {
    firstLetter = color.charAt(0);
    color = color.replace(firstLetter, firstLetter.toUpperCase());

    const rect = {
        width, height, color,
        calcArea() {
            return width * height;
        }
    }
    return rect;
}
let rect = demo(4, 5, 'red');
// demo(5, 3, 'red')
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());