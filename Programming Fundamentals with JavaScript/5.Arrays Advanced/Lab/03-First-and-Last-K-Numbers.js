function firstLastNums (arr){
    let index = arr.shift();
    let firstElements = arr.slice(0, index);
    let lastElements = arr.slice (arr.length - index);
    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}
firstLastNums ([2, 7, 8, 9])