function passGenerator(arr) {
    let [first, second, third] = arr;
    let pass = '';
    let concatenated = (first + second).split('');
    let replacementStr = third.toUpperCase().split('');
    let replacementIdx = 0;
    for (const char of concatenated) {
        if ('aeiouAEIOU'.includes(char)) {
            pass += replacementStr[replacementIdx];
            replacementIdx++;
            if (replacementIdx >= replacementStr.length) {
                replacementIdx = 0;
            }
            // replacementIdx = (replacementIdx + 1) % replacementStr.length;
        } else {
            pass += char;
        }
    }
    console.log(`Your generated password is ${pass.split('').reverse().join('')}`);
}
passGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
])

//solve(1)
// function passGenerator(arr) {
//     let [first, second, third] = arr;
//     let concatenated = (first + second);
//     let replacementStr = third;
//     let idx = 0;
//     for (const char of concatenated) {
//         if ('aeiouAEIOU'.includes(char)) {
//             concatenated = concatenated.replace(char, replacementStr[idx].toUpperCase());
//             idx++;
//             if (idx >= replacementStr.length) {
//                 idx = 0;
//             }
//         }
//     }
//     let pass = concatenated.split('').reverse().join('');
//     console.log(`Your generated password is ${pass}`);
// }