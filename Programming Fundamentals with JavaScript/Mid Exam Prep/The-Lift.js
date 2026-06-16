function theLift (arr){
    let touristCout = Number (arr[0]);
    const maxPerCab = 4;
    let cabins = arr[1].split(' ').map(Number);
    let arr1 = [];
    for (let current of cabins){
        while (current < 4 && touristCout > 0){
            current++;
            touristCout--;
        }
        arr1.push(current);
    }
    const isFullyLoaded = arr1.every(arr1 => arr1 === 4);
    if (isFullyLoaded && touristCout === 0){
        console.log(arr1.join(' '));
    }else if(touristCout === 0 && !isFullyLoaded){
        console.log(`The lift has empty spots!
${arr1.join(' ')}`);
    }else{
        console.log(`There isn't enough space! ${touristCout} people in a queue!
${arr1.join(' ')}`);
    }
}
theLift (["15", "0 0 0 0 0"])
theLift (["20", "0 2 0"])