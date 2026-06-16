function oddCounter (input){
    let counter = {};
    let arr = input.toLowerCase().split(' ');
    for (let word of arr){
        if (!counter[word]){
            counter[word] = 0;
        }
        counter[word]++;
    }
    // console.log(counter);
    let res = [];
    for (const [word, count] of Object.entries(counter)){
        if (count % 2 !== 0){
            res.push(word);
        }
    }
    console.log(res.join(' '));
}
oddCounter ('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')