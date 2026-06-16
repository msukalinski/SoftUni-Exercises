function revInPlace (arr){
    for (let index = 0; index < arr.length / 2; index++){
        let oldElement = arr[index];
        let prevIndex = arr.length - 1 - index;
        arr[index] = arr[prevIndex];
        arr [prevIndex] = oldElement;
    }
    console.log(arr.join(' '));
}
// function revInPlace (arr){
//     let reversed = ''
//     for (let index = arr.length - 1; index >= 0; index--){
//         reversed += arr[index] + ' ';
//     }
//     console.log(reversed);
// }
revInPlace(['a', 'b', 'c', 'd', 'e']);


// function demo(arr) {

//     function swapElements (arr, i, j){
//         let oldElement = arr[i];
//         let prevIndex = arr.length - 1 - i;
//         arr[i] = arr[prevIndex];
//         arr[prevIndex] = oldElement;
//     }

//     for (let i = 0; i < arr.length / 2; i++){
//         swapElements(arr, i, arr.length - 1 - i);
//     }
//     console.log(arr.join(' '));
// }
// demo(['a', 'b', 'c', 'd', 'e']);