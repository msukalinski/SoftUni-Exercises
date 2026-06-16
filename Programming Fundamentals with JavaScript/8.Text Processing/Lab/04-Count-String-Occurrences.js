function wordCounter (text, word){
    // array solution
    let count = text.split(' ').filter(x => x === word).length;
    // let count = 0;
    // for (const current of arr){
    //     if (current === word){
    //         count++;
    //     }
    // }
    console.log(count);
}
wordCounter('This is a word and it also is a sentence',
'is')