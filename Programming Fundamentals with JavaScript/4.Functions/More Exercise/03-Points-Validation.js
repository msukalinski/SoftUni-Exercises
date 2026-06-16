function demo(x1, y1, x2, y2) {
    const isIntegerDistance = (x1, y1, x2, y2) => {
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(distance);
    };

    console.log(isIntegerDistance(x1, y1, 0, 0)
        ? `{${x1}, ${y1}} to {0, 0} is valid`
        : `{${x1}, ${y1}} to {0, 0} is invalid`);

    console.log(isIntegerDistance(x2, y2, 0, 0)
        ? `{${x2}, ${y2}} to {0, 0} is valid`
        : `{${x2}, ${y2}} to {0, 0} is invalid`);

    console.log(isIntegerDistance(x1, y1, x2, y2)
        ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
        : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
demo(3, 0, 0, 4);
demo(2, 1, 1, 1);
// demo(5835);