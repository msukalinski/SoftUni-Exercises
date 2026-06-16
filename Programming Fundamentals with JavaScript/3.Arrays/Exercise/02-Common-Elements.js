function commonElements (arr1, arr2){
    for (let i = 0; i < arr1.length; i++){
        for (j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]){
                console.log(arr1[i]);
            }
        }
    }
}

// function elements (arr1, arr2){
//     for (const element1 of arr1){
//         for (const element2 of arr2){
//             if (element1 === element2){
//                 console.log(element1);
//             }
//         }
//     }
// }
commonElements (['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])
commonElements (['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])