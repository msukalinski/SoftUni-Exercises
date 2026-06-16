function demo(arr) {
    let list = {};

    for (let line of arr) {
        if (line.includes('arrives')) {
            let leader = line.split(' arrives')[0];
            list[leader] = {};

        } else if (line.includes(':')) {
            let [leader, args] = line.split(': ');
            let [army, count] = args.split(', ');
            count = Number(count);

            if (list[leader]) {
                list[leader][army] = count;
            }

        } else if (line.includes('+')) {
            let [army, count] = line.split(' + ');
            count = Number(count);

            for (let [leader, armies] of Object.entries(list)) {
                if (armies[army]) {
                    armies[army] += count;
                }
            }

        } else if (line.includes('defeated')) {
            let leader = line.split(' defeated')[0];

            if (list[leader]) {
                delete list[leader];
            }
        }
    }

    Object.entries(list)
        .map(([leader, armies]) => {
            const total = Object.values(armies).reduce((a, b) => a + b, 0);
            return { leader, armies, total };
        })
        .sort((a, b) => b.total - a.total)
        .forEach(entry => {
            console.log(`${entry.leader}: ${entry.total}`);

            Object.entries(entry.armies)
                .sort((a, b) => b[1] - a[1])
                .forEach(([army, count]) => {
                    console.log(`>>> ${army} - ${count}`);
                })
        })
}
demo(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])