function specialNums(input) {
    for (let i = 1; i <= input; i++){
        let current = String([i]).split('');
        let sum = 0;
        for(let num of current){
            sum += Number(num);
        }
        if(sum == '5' || sum == '7' || sum == '11'){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
    }
}
specialNums(15)