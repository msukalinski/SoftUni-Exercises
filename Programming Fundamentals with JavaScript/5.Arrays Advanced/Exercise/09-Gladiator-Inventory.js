function demo(arr) {
    let inventory = arr.shift().split(' ');

    for (const command of arr) {
        let [operation, item] = command.split(' ');

        switch (operation) {
            case 'Buy':
                if (!inventory.includes(item)) {
                    inventory.push(item)
                }
                break;
            case 'Trash':
                if (inventory.includes(item)) {
                    inventory = inventory.filter(a => a !== item);
                }
                break;
            case 'Repair':
                if (inventory.includes(item)) {
                    inventory = inventory.filter(a => a !== item);
                    inventory.push(item);
                }
                break;
            case 'Upgrade':
                let [equipment, upgrade] = item.split('-');
                const index = inventory.indexOf(equipment);
                if (index !== -1){
                    inventory.splice(index + 1, 0, `${equipment}:${upgrade}`)
                }
                break;
        }
    }
    console.log(inventory.join(' '));
}
demo(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
demo(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);