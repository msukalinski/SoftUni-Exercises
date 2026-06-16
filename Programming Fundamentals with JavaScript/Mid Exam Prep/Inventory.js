function inventory(input) {
    let arr = input.shift().split(', ');
    for (let tokens of input) {
        let [command, item] = tokens.split(' - ');
        if (command === 'Craft!') {
            break;
        }
        switch (command) {
            case 'Collect':
                if (!arr.includes(item)) {
                    arr.push(item);
                }
                break;
            case 'Drop':
                if (arr.includes(item)) {
                    let idx = arr.indexOf(item);
                    arr.splice(idx, 1);
                }
                break;
            case 'Combine Items':
                let [firstItem, secondItem] = item.split(':');
                if (arr.includes(firstItem)) {
                    let idx = arr.indexOf(firstItem);
                    arr.splice(idx + 1, 0, secondItem);
                }
                break;
            case 'Renew':
                if (arr.includes(item)) {
                    let idx = arr.indexOf(item);
                    arr.splice(idx, 1);
                    arr.splice(arr.length, 0, item);
                }
                break;
        }
    }
    console.log(arr.join(', '));
}
inventory(['Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'])
inventory(['Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'])