function demo (arr){
    let result = [];

    for (let data of arr){
        const [command, text] = data.split(' ');

        if (command === 'add'){
            result.push(text);
        }else if (command === 'remove'){
            result = result.filter((e) => e !== text);
        }else if (command === 'print'){
            console.log(result.join(','));
        }
    }
}
demo(['add hello', 'add again', 'remove hello', 'add again', 'print']);