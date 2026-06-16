function signCheck (first, second, third){
    let positive = 0;
    if (first >= 0){
        positive += 1;
    }
    if (second >= 0){
        positive += 1;
    }
    if (third >= 0){
        positive += 1;
    }
    if (positive === 1 || positive === 3){
        return 'Positive';
    }else{
        return 'Negative'
    }
}
const result = signCheck (-1, -55, -5);
console.log(result);


// const demo = (a, b, c) => {
//     const negativesCount = [a, b, c].filter(num => num < 0).length;
//     console.log(negativesCount % 2 === 0 ? 'Positive' : 'Negative');
// };

// demo(0, -0, -15)