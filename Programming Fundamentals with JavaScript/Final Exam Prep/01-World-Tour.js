function worldTour(arr) {
    let stops = arr.shift();
    for (let current of arr) {
        if (current == 'Travel') {
            break;
        }
        if (current.startsWith('Add Stop')) {
            let [command, idx, str] = current.split(':');
            const validIdx = idx >= 0 && idx <= stops.length;
            if (validIdx) {
                stops = stops.slice(0, idx) + str + stops.slice(idx)
            }
        } else if (current.startsWith('Remove Stop')) {
            let [command, startIdx, endIdx] = current.split(':');
            const validIndices = startIdx >= 0 && startIdx <= stops.length && endIdx >= 0 && endIdx <= stops.length;
            if (validIndices) {
                stops = stops.slice(0, startIdx) + stops.slice(Number(endIdx) + 1)
            }
        } else if (current.startsWith('Switch')) {
            let [command, oldStr, newStr] = current.split(':');
            stops = stops.split(oldStr).join(newStr);
        }
        console.log(stops);
    }
    console.log(`Ready for world tour! Planned stops: ${stops} `);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])