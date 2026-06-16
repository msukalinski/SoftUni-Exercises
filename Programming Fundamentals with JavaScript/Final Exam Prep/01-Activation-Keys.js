function demo(arr) {
    let raw = arr.shift();
    let command = arr.shift();

    while (command !== 'Generate') {
        let tokens = command.split('>>>');
        if (tokens.includes('Slice')) {
            let [command, start, end] = tokens;
            start = Number(start);
            end = Number(end);
            raw = raw.substring(0, start) + raw.substring(end);
            console.log(raw);
        } else if (tokens.includes('Flip')) {
            let [command, type, start, end] = tokens;
            start = Number(start);
            end = Number(end);
            const substring = raw.substring(start, end);
            if (type === 'Upper') {
                const upperCased = substring.toUpperCase();
                raw = raw.substring(0, start) + upperCased + raw.substring(end);
                console.log(raw);
            } else if (type === 'Lower') {
                const lowerCased = substring.toLowerCase();
                raw = raw. substring(0, start) + lowerCased + raw.substring(end);
                console.log(raw);
            }
        } else if (tokens.includes('Contains')) {
            let [command, text] = tokens;
            if (raw.includes(text)){
                console.log(`${raw} contains ${text}`);
            }else{
                console.log('Substring not found!');
            }
        }
        command = arr.shift()
    }
    console.log(`Your activation key is: ${raw}`);
}

demo(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
// demo()