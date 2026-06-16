function arrRotation (arr, num){
    for (let rotation = 0; rotation < num; rotation++){
        let element = arr.shift();
        arr.push(element);
    }
    console.log(arr.join(' '));
}
arrRotation ([51, 47, 32, 61, 21], 2 )