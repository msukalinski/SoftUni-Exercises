function demo(arr, commands) {
    for (const command of commands) {
        let [operation, ...args] = command.split(' ');

        switch (operation) {
            case 'add': {
                const index = Number(args[0]);
                const element = Number(args[1]);
                arr.splice(index, 0, element);
                break;
            }
            case 'addMany': {
                const index = Number(args[0]);
                const elements = args.slice(1).map(Number);
                arr.splice(index, 0, ...elements);
                break;
            }
            case 'contains': {
                const element = Number(args[0]);
                console.log(arr.indexOf(element));
                break
            }
            case 'remove': {
                const index = Number(args[0]);
                arr.splice(index, 1);
                break;
            }
            case 'shift': {
                const positions = Number(args[0]);
                for (let i = 0; i < positions; i++) {
                    arr.push(arr.shift());
                }
                break;
            }
            case 'sumPairs': {
                const result = [];
                for (let i = 0; i < arr.length; i += 2) {
                    const first = arr[i];
                    const second = arr[i + 1] || 0;
                    result.push(first + second);
                }
                arr = result;
                break;
            }
            case 'print': {
                console.log(`[ ${arr.join(', ')} ]`);
                return;
            }
        }
    }
}
demo([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
demo([1, 2, 3, 4, 5],

['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',

'shift 1', 'print']);