function race(arr){
    let names = arr.shift().split(', ');
    let command = arr.shift();
    let results = {};
    let letterPattern = /[A-Za-z]/g; //or /[a-z]/gi
    let digitPattern = /\d/g;
    names.forEach(name => results[name] = 0);
    while (command != 'end of race') {
        let letterMatches = command.match(letterPattern);
        let name = letterMatches.join('');
        let digitMatches = command.match(digitPattern);
        let distance = digitMatches.map(Number).reduce((acc, val) => acc + val);
        if (name in results){
            results[name] += distance;
        }
        command = arr.shift();
    }
    let sorted = Object.entries(results).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
race (['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])