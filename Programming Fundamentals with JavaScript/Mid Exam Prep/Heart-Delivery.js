function demo(newArr) {
    let arr = newArr.shift().split('@').map(Number);
    let loveCommand = newArr.pop();
    let currentIndex = 0;

    for (let tokens of newArr){
        let [command, index] = tokens.split(' ');
        index = Number(index);
        currentIndex += index;
        if (currentIndex >= arr.length){
            currentIndex = 0;
        }
        if (arr[currentIndex] !== 0){
            arr[currentIndex] -= 2;
            if (arr[currentIndex] === 0){
                console.log(`Place ${currentIndex} has Valentine's day.`);
            }
        }else{
            console.log(`Place ${currentIndex} already had Valentine's day.`);
        }
    }
    console.log(`Cupid's last position was ${currentIndex}.`);
    let failed = arr.filter(a => a !== 0).length;
    if (!failed){
        console.log('Mission was successful.');
    }else{
        console.log(`Cupid has failed ${failed} places.`);
    }
}
demo(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
// demo(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"])