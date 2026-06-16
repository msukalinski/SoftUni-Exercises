// function demo(arr) {
//     let sorted = arr.sort((a, b) => a.localeCompare(b))
//         .forEach((name, index) => console.log(`${index + 1}.${name}`));

//     //witout .forEach
//     // let idx = 1;
//     // for (const name of sorted) {
//     //     console.log(`${idx}.${name}`);
//     //     idx++;
//     // }
// }

function demo(arr) {
    arr
    .sort((a, b) => a.localeCompare(b))
    .map((name, idx) => console.log(`${idx + 1}.${name}`));
}

demo(["John",
    "Bob",
    "Christina",
    "Ema"]);