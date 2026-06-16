// function wordCounter (wordsInput){
//     let words = {};
//     for (const word of wordsInput){
//         if (!words[word]){
//             words[word] = 0;
//         }
//         words[word]++;
//     }
//     let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);
//     for (const [word, count] of sorted){
//         console.log(`${word} -> ${count} times`);
//     }
// }
// wordCounter (["Here", "is", "the", "first", "sentence",
// "Here", "is", "another", "sentence", "And",
// "finally", "the", "third", "sentence"])

function demo(arr) {
    let list = new Map;

    for (const word of arr) {
        if (!list.has(word)) {
            list.set(word, 1);
        }else{
            list.set(word, list.get(word) + 1);
        }
    }

    let sorted = Array.from(list).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    for (const [word, count] of sorted) {
        console.log(`${word} -> ${count}`);
    }
}

demo(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);
// demo()