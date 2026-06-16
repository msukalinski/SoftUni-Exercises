function demo(year, month, day) {
    let currentDate = new Date(year, month - 1, day);
    currentDate.setDate(currentDate.getDate() - 1)
    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`);
}
demo(2016, 9, 30)
demo(1234)