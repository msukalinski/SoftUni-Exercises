function demo(arr) {
    arr
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .forEach(str => console.log(str));
}
demo(['test', 'Deny', 'omen', 'Default']);