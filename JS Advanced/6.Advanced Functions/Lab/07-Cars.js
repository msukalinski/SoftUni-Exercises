function cars(arr) {
    const list = {};

    for (const line of arr) {
        if (line.includes('inherit')) {
            let [, name, , parentObject] = line.split(' ');
            list[name] = Object.create(list[parentObject]);
        } else if (line.includes('create')) {
            let [, name] = line.split(' ');
            list[name] = {};

        } else if (line.includes('set')) {
            let [, name, key, value] = line.split(' ');
            list[name][key] = value;

        } else if (line.includes('print')) {
            let [, name] = line.split(' ');
            let properties = [];

            for (let key in list[name]) {
                let prop = `${key}:${list[name][key]}`;
                properties.push(prop);
            };
            console.log(properties.join(','));
        }
    }
}
cars(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2'])