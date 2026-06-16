function topNumbers (input){
    let arr = input.split(' ').map(Number);
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    const topNums = arr
    .filter(num => num > average)
    .sort((a, b) => b - a)
    .slice(0, 5);
    if (topNums.length > 0){
        console.log(topNums.join(' '));
    }else{
        console.log('No');
    }
}
topNumbers ('10 20 30 40 50')