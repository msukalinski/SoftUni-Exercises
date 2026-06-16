function replaceChars (str){
    let result = '';
    for (let idx in str){
        if (idx === 0){
            result += str[idx]
        }else{
            if (str[idx] !== str[idx - 1])
            result += str[idx]
        }
    }
    console.log(result);
}
replaceChars ('aaaaabbbbbcdddeeeedssaa')