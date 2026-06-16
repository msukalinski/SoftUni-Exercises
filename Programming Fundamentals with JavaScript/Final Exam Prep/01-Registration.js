function demo(arr) {
    let name = arr.shift();
    let tokens = arr.shift();

    while (tokens !== 'Registration') {
        let [command, ...args] = tokens.split(' ');

        if (command === 'Letters') {
            let type = args[0];
            let substring = name.substring(0);
            if (type === 'Lower') {
                lowerCased = substring.toLowerCase();
                name = lowerCased;
                console.log(name);
            } else if (type === 'Upper') {
                upperCased = substring.toUpperCase();
                name = upperCased;
                console.log(name);
            }
        } else if (command === 'Reverse') {
            let [start, end] = args;
            start = Number(start);
            end = Number(end);
            if (start >= 0 && end < name.length) {
                let substring = name.substring(start, end + 1);
                let reversed = substring.split('').reverse().join('');
                console.log(reversed);
            } else {
                continue;
            }
        } else if (command === 'Substring') {
            let text = args[0];
            if (name.includes(text)) {
                name = name.replace(text, '');
                console.log(name);
            } else {
                console.log(`The username ${name} doesn't contain ${text}.`);
            }
        } else if (command === 'Replace') {
            let char = args[0];
            // name = name.replaceAll(char, '-');
            name = name.split(char).join('-');
            console.log(name);
        } else if (command === 'IsValid') {
            let char = args[0];
            if (name.includes(char)) {
                console.log('Valid username.');
            } else {
                console.log(`${char} must be contained in your username.`);
            }
        }
        tokens = arr.shift();
    }
}