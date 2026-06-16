function demo (arr){
    let condensed = [];
    while (arr.length > 1){
        for (let index = 0; index < arr.length - 1; index++){
            let curElement = arr[index];
            let nextEl = arr[index + 1];
            condensed.push(curElement + nextEl);
        }
        arr= condensed;
        condensed = []
    }
    console.log(arr[0]);
}
demo ([2,10,3])