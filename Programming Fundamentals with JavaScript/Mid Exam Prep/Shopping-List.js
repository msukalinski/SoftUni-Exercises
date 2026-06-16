function shoppingList(arr) {
    let list = arr.shift().split('!');
    for (let index = 0; index < arr.length; index++) {
        let [command, arg1, arg2] = arr[index].split(' ');
        if (command === 'Go' & arg1 === 'Shopping!') {
            break;
        } else if (command === 'Urgent') {
            let product = arg1;
            let exists = list.includes(product);
            if (!exists){
                list.unshift(product);
            }
        } else if (command === 'Unnecessary') {
            let product = arg1;
            let exists = list.includes(product);
            if (exists){
                let position = list.indexOf(product);
                list.splice(position, 1);
            }
        } else if (command === 'Correct') {
            let oldProduct = arg1;
            let newProduct = arg2;
            let exists = list.includes(oldProduct);
            if (exists){
                let position = list.indexOf(oldProduct);
                list.splice(position, 1, newProduct)
            }
        } else if (command === 'Rearrange') {
            let product = arg1;
            let exists = list.includes(product);
            if (exists){
                let position = list.indexOf(product);
                let deleted = list.splice(position, 1).shift();
                list.push(deleted);
            }
        }
    }
    console.log(list.join(', '));
}
shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
shoppingList (["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])