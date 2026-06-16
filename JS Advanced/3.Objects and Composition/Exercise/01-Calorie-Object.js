function demo(arr) {
    const list = {};
    for (let i = 0; i < arr.length; i += 2) {
        let name = arr[i];
        let cals = Number(arr[i + 1]);
        list[name] = cals;
    }
    console.log(list);
}
demo(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])