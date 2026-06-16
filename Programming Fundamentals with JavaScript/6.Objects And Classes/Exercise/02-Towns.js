function townsInfo(arr) {
    for (let line of arr) {
        let tokens = line.split(' | ');
        let [town, arg1, arg2] = tokens;
        let latitude = Number(arg1).toFixed(2);
        let longitude = Number(arg2).toFixed(2);
        let obj = {
            town: town,
            latitude: latitude,
            longitude: longitude,
        }
        console.log(obj);
    }
}
townsInfo(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])


    // function demo(arr) {
    //     let info = [];
    
    //     for (let tokens of arr) {
    //         let [town, latitude, longitude] = tokens.split(' | ').map(x => x.trim());
    //         latitude = Number(latitude).toFixed(2);
    //         longitude = Number(longitude).toFixed(2);
    
    //         const townObj = {town: town, latitude: latitude, longitude: longitude};
    //         info.push(townObj)
    //     }
    //     for (const obj of info){
    //         console.log(obj);
    //     }
    // }
    // demo(['Sofia | 42.696552 | 23.32601',
    //     'Beijing | 39.913818 | 116.363625']);
    // // demo()