function revealWords (arr1, arr2){
    let words = arr1.split(', ');
    for (let word of words){
        let starTemplate = '*'.repeat(word.length);
        arr2 = arr2.replace(starTemplate, word);
    }
    console.log(arr2);
}
// revealWords('great',
// 'softuni is ***** place for learning new programming languages')
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')