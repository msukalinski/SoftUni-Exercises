function condNums (arr){
    let condensed = [];
    while(arr.length > 1){
        for (let index = 0; index < arr.length - 1; index++){
            let curElement = arr[index];
            let nextElement = arr [index + 1];
            condensed.push(curElement + nextElement);
        }
        arr = condensed;
        condensed = [];
    }
    console.log(arr[0]);
}
condNums ([2,10,3])