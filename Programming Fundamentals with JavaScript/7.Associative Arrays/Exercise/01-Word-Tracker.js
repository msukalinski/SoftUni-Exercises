function wordCounter (arr){
    let tokens = arr.shift().split(' ');
    let keyWords = {};
    for (const word of tokens){
        keyWords[word] = 0;
    }
    for (const word of arr){
        if (word in keyWords){
            keyWords[word]++;
        }
    }
    let sorted = Object.entries(keyWords).sort((a, b) => b[1] - a[1]);
    for (const [word, count] of sorted){
        console.log(`${word} - ${count}`);
    }
}
wordCounter ([
'this sentence',
'In', 'this', 'sentence', 'you', 'have',
'to', 'count', 'the', 'occurrences', 'of',
'the', 'words', 'this', 'and', 'sentence',
'because', 'this', 'is', 'your', 'task'
])


// function demo(arr) {
//     let list = new Map;
//     let keyWords = arr.shift().split(' ');
    
//     for (let word of keyWords){
//         if (!list.has(word)){
//             list.set(word, 0);
//         }
//     }
    
//     for (let word of arr){
//         if (list.has(word)){
//             list.set(word, list.get(word) + 1);
//         }
//     }

//     let sorted = Array.from(list).sort((a, b) => b - a);

//     for (let [word, count] of sorted){
//         console.log(`${word} -> ${count}`);
//     }
// }

// demo([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have',
//     'to', 'count', 'the', 'occurrences', 'of',
//     'the', 'words', 'this', 'and', 'sentence',
//     'because', 'this', 'is', 'your', 'task'
// ]);
// // demo()