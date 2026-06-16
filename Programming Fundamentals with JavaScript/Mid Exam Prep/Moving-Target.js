function movingTarget(input) {
    let arr = input.shift().split(' ').map(Number);
    for (let tokens of input) {
        let commands = tokens.split(' ');
        let command = commands.shift();
        let [arg1, arg2] = commands.map(Number);
        if (command === 'End') {
            break;
        }
        switch (command) {
            case 'Shoot':
                if (arg1 * 2 + 1 >= 0 && arg1 < arr.length) {
                    let num = arr.splice(arg1, 1).shift();
                    num -= arg2;
                    if (num > 0) {
                        arr.splice(arg1, 0, num)
                    }
                }
                break;
            case 'Add':
                if (arg1 >= 0 && arg1 < arr.length) {
                    arr.splice(arg1, 0, arg2);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                if (arg1 >= 0 && arg1 < arr.length && arg1 - arg2 >= 0 && arg1 + arg2 < arr.length) {
                    arr.splice(arg1 - arg2, arg2 * 2 + 1)
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
    }
    console.log(arr.join('|'));
}
movingTarget((["52 74 23 44 96 110",
    
    "Shoot 5 10",
    
    "Shoot 1 80",
    
    "Strike 2 1",
    
    "Add 22 3",
    
    "End"]))
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"])


    // function demo(newArr) {
    //     let arr = newArr.shift().split(' ').map(Number);
    //     let endCommand = newArr.pop();
    
    //     for (let tokens of newArr){
    //         let [command, index1, value] = tokens.split(' ');
    //         index1 = Number(index1);
    //         value = Number(value);
            
    //         if (command === 'Shoot'){
    //             if (arr[index1]){
    //                 arr[index1] -= value;
    //                 if (arr[index1] <= 0){
    //                     arr.splice(index1, 1);
    //                 }
    //             }
    //         }else if (command === 'Add'){
    //             if (arr[index1]){
    //                 arr.splice(index1, 0, value);
    //             }else{
    //                 console.log('Invalid placement!');
    //             }
    //         }else if (command === 'Strike'){
    //             if (arr[index1 - value] && arr[index1 + value]){
    //                 arr.splice(index1 - value, value * 2 + 1);
    //             }else{
    //                 console.log('Strike missed!');
    //             }
    //         }
    //     }
    //     console.log(arr.join('|'));
    // }
    // demo(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]);
    // demo(["1 2 3 4 5", "Strike 0 1", "End"])