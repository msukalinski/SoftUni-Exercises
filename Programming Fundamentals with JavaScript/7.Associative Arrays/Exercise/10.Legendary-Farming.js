function demo(arr) {
    const keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0,
    };
    const junkMaterials = {};

    const legendaryItems = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath',
    }

    let obtainedItem = null;
    const lines = arr.split('\n');

    for (const line of lines) {
        const items = line.toLowerCase().split(' ');
        for (let i = 0; i < items.length; i += 2) {
            const qty = Number(items[i]);
            const material = items[i + 1];

            if (keyMaterials.hasOwnProperty(material)) {
                keyMaterials[material] += qty;

                if (keyMaterials[material >= 250]) {
                    obtainedItem = legendaryItems[material];
                    keyMaterials[material] -= 250;
                    break;
                }
            } else {
                if (!junkMaterials[material]) {
                    junkMaterials[material] = 0;
                }
                junkMaterials[material] += qty;
            }
        }

        if (obtainedItem) {
            break;
        }
    }
    console.log(`${obtainedItem} obtained!`);

    Object.entries(keyMaterials)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(([material, qty]) => {
            console.log(`${material}: ${qty}`);
        });

    Object.entries(junkMaterials)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(([material, qty]) => {
            console.log(`${material}: ${qty}`);
        });
}

// demo('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
demo('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')