function destinationMapper(text) {
    let pattern = /([\=\/])(?<dest>[A-Z][A-Za-z]{2,})\1/g;
    let stops = [];
    let points = 0
    let matches = text.matchAll(pattern);
    for (const match of matches) {
        stops.push(match.groups.dest);
    }
    for (let word of stops) {
        points += word.length;
    }
    console.log(`Destinations: ${stops.join(', ')}`)
    console.log(`Travel Points: ${points}`);
    console.log(matches);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")

// function demo(arr) {
//     let pattern = /([=\/])([A-Z][A-Za-z]{2,})\1/g;
//     let destinations = [];
//     let points = 0;
//     let match = pattern.exec(arr);

//     while (match) {
//         const destination = match[2];
//         destinations.push(destination);
//         points += destination.length;
//         match = pattern.exec(arr);
//     }
//     console.log(`Destinations: ${destinations.join(', ')}`);
//     console.log(`Travel Points: ${points}`);
// }