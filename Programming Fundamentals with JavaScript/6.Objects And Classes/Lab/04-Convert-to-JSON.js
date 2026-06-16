function convertToJSON(first, last, color) {
    let info = {
        name: first,
        lastName: last,
        hairColor: color,
    }
    let converted = JSON.stringify(info);
    console.log(converted);
}
convertToJSON('George', 'Jones', 'Brown')