function maxSequenceOfEl (arr){
    let max = [];
    for (let i = 0; i < arr.length; i++){
        const element = arr[i];
        let currSequence = [element];
        for (let j = i + 1; j < arr.length; j++){
            if (element === arr[j]){
                currSequence.push(element);
            }else{
                break;
            }
        }
        if (max.length < currSequence.length){
            max = currSequence;
        }
    }
    console.log(max.join(' '));
}
maxSequenceOfEl([0, 1, 1, 5, 2, 2, 6, 3, 3])