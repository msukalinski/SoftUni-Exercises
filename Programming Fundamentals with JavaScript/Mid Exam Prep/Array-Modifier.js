function arrModifier (input){
    let arr = input.shift().split(' ');
    for (let current of input){
        let [command, idx1, idx2] = current.split(' ');
        if (command === 'swap'){
            swapEl (arr, Number(idx1), Number(idx2));
        }else if (command === 'multiply'){
            multiplyEl (arr, Number(idx1), Number(idx2))
        }else if (command === 'decrease'){
            arr = arr.map(el => (Number (el) - 1).toString())
        }else if (command === 'end'){
            break;
        }
    }
    console.log(arr.join(', '));
    function swapEl (arr, idx1, idx2){
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
    function multiplyEl(arr, idx1, idx2) {
        arr[idx1] *= arr[idx2];
    }
    function decreaseEl(arr) {
        arr = arr.map(element => Number(element) - 1);
    }
}
// function arrModifier (input){
//     let arr = input.shift().split(' ');
//     for (let current of input){
//         let token = current.split(' ');
//         let [command, idx1, idx2] = token;
//         if (command === 'swap'){
//             let pos1 = Number (idx1);
//             let pos2 = Number (idx2);
//             let first = arr.splice(pos1, 1).shift();
//             let second = arr.splice (pos2 - 1, 1).shift();
//             arr.splice(pos1, 0, second);
//             arr.splice(pos2, 0, first);
//         }else if (command === 'multiply'){
//             let pos1 = Number (idx1);
//             let pos2 = Number (idx2);
//             let first = Number (arr.splice (pos1, 1).shift());
//             let second = Number (arr.splice (pos2 - 1, 1).shift());
//             let result = first * second;
//             arr.splice (pos1, 0, result);
//             arr.splice (pos2, 0, second);
//         }else if (command === 'decrease'){
//             arr = arr.map(el => (Number (el) - 1).toString())
//         }else if (command === 'end'){
//             break;
//         }
//     }
//     console.log(arr);
// }
arrModifier (['23 -2 321 87 42 90 -123',
'swap 1 3', 'swap 3 6', 'swap 1 0',
'multiply 1 2', 'multiply 2 1', 'decrease', 'end'])
// arrModifier([ 

//     '1 2 3 4', 
  
//     'swap 0 1', 
  
//     'swap 1 2', 
  
//     'swap 2 3', 
  
//     'multiply 1 2', 
  
//     'decrease', 
  
//     'end' 
  
//   ])