function searchForANum(arr1, arr2){
    let [toTake, toDelete, toSearch] = arr2;
    let newArr = arr1.slice(0, toTake)
    newArr.splice(0, toDelete);
    let counter = 0;
    for (const nums of newArr) {
        if (nums === toSearch){
            counter++;
        }
    }
    console.log(`Number ${toSearch} occurs ${counter} times.`);
}
searchForANum ([5, 3, 3, 3, 1, 6],
    [5, 2, 3])