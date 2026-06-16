function demo(arr) {
    let firstRow = arr.shift();
    
    const res = [];

    for (const line of arr) {
        const splitLine = line.split('|').map(word => word.trim()).filter(word => word !== '');
        let [town, lat, lon] = splitLine;
        lat = Number(lat).toFixed(2);
        lon = Number(lon).toFixed(2);
        let townObj = {
            Town: town,
            Latitude: Number(lat),
            Longitude: Number(lon),
        }
        res.push(townObj);
    }
    console.log(JSON.stringify(res));
}
demo(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])