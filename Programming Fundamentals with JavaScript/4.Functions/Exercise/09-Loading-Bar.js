function loadingBar (num){
    function percent (n){
        return '%'.repeat(n/10);
    }
    function dots (n){
        return '.'.repeat(10 - n / 10);
    }
    if (num === 100){
        console.log(`100% Complete!\n[${percent(num)}]`);
    }else{
        console.log(`${num}% [${percent(num)}${dots(num)}]\nStill loading...`);
    }
}
loadingBar (50)