function fancyBarcodes (arr){
    let pattern = /\@\#+([A-Z][A-Za-z0-9]{4,}[A-Z])\@\#+/;
    let digitPattern = /\d/g;
    let count = Number(arr.shift());
    for (let current of arr){
        let digits = [];
        let patternMatch = current.match(pattern);
        if (patternMatch){
            let curDigits = current.match(digitPattern);
            if (curDigits !== null){
                digits.push(curDigits.join(''));
            }else{
                digits.push('00');
            }
            console.log(`Product group: ${digits}`);
        }else{
            console.log('Invalid barcode');
        }
    }
}
// fancyBarcodes (["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"])
fancyBarcodes (["6", "@###Val1d1teM@###", "@#ValidIteM@#", "##InvaliDiteM##", "@InvalidIteM@", "@#Invalid_IteM@#", "@#ValiditeM@#"])