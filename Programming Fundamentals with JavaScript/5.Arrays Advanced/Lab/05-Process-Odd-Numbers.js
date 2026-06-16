function oddNums (arr){
    let odd = arr
    .filter((x, i) => i % 2 !== 0)
    .map (x => x * 2)
    .reverse();
    console.log(odd.join(' '));
}
oddNums ([10, 15, 20, 25])