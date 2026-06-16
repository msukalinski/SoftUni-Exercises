function demo (input1, input2){
    let word = input1.toLowerCase();
    let text = input2.toLowerCase().split(' ');
    if (!text.includes(word)){
        console.log(`${input1} not found!`);
    }else{
        console.log(input1);
    }
}
demo ('javascript',
'JavaScript is the best programming language')
demo('python',
'JavaScript is the best programming language')


// function demo(input1, input2) {
//     let word = input1.toLowerCase();
//     let text = input2.toLowerCase().split(' ');
    
//     let occurancies = text.filter(a => a === word);
//     if (occurancies.length !== 0){
//         console.log(word);
//     }else{
//         console.log(`${word} not found!`);
//     }
// }

// demo('javascript', 'Javascript is the best programming language');
// // demo()