function rounding(first, second) {
    if (second > 15) {
        console.log(parseFloat(first.toFixed(15)));
    } else {
        console.log(parseFloat(first.toFixed(second)));
    }
}
rounding(10.5, 3)