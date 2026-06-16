function argInfo(...args) {
    const listArg = {};

    for (let arg of args) {
        console.log(`${typeof arg}: ${arg}`);

        if (!listArg.hasOwnProperty(typeof arg)) {
            listArg[typeof arg] = 0;
        }
        listArg[typeof arg]++;
    }

    Object.entries(listArg)
        .sort((a, b) => b[1] - a[1])
        .forEach(([key, value]) => console.log(`${key} = ${value}`));
}
argInfo('cat', 42, function () { console.log('Hello world!'); });