function demo(newArr) {
    let arr = newArr.shift().split(' ');
    let moves = 0;

    for (let indices of newArr) {
        if (indices === 'end') {
            break;
        }
        moves++;

        let [idx1, idx2] = indices.split(' ').map(Number);
        if (idx1 === idx2 || idx1 < 0 || idx1 >= arr.length || idx2 < 0 || idx2 >= arr.length) {
            arr.splice(arr.length / 2, 0, `-${moves}a`);
            arr.splice(arr.length / 2, 0, `-${moves}a`);
            console.log('Invalid input! Adding additional elements to the board');
        }else if (arr[idx1] !== arr[idx2]){
            console.log('Try again!');
        }else if (arr[idx1] === arr[idx2]) {
            let el = arr[idx1];
            arr = arr.filter(a => a !== arr[idx1]);
            console.log(`Congrats! You have found matching elements - ${el}!`);
        }
        if (arr.length <= 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }
    }
    if (arr.length > 0) {
        console.log(`Sorry you lose :(
${arr.join(' ')}`);
    }
}
// demo(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
// demo([
//     "a 2 4 a 2 4", 
//     "4 0", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]
//     );
demo([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"])