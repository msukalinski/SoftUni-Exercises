function printAndSum (start, end){
    let sum = 0;
    let buff = '';
    for (let i = start; i <= end; i++){
        sum += i;
        buff += i + ' ';
    }
    console.log(buff);
    console.log(`Sum: ${sum}`);
}
printAndSum (0, 26)