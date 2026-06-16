function phoneShop (input){
    let arr = input.shift().split(', ');
    for(let tokens of input){
        let [command, phone] = tokens.split(' - ');
        if (command === 'End'){
            break;
        }
        switch (command){
            case 'Add':
                if (!arr.includes(phone)){
                    arr.push(phone);
                }
                break;
            case 'Remove':
                if (arr.includes(phone)){
                    let idx = arr.indexOf(phone);
                    arr.splice(idx, 1);
                }
                break;
            case 'Bonus phone':
                let [first, second] = phone.split(':');
                if (arr.includes(first)){
                    let idx = arr.indexOf(first)
                    arr.splice(idx + 1, 0, second)
                }
                break;
            case 'Last':
                if (arr.includes(phone)){
                    let idx = arr.indexOf(phone);
                    let current = arr.splice(idx, 1).shift();
                    arr.push(current);
                }
                break;
        }
    }
    console.log(arr.join(', '));
}
phoneShop (["SamsungA50, MotorolaG5, IphoneSE", 
"Add - Iphone10", 
"Remove - IphoneSE", 
"End"])

phoneShop (["HuaweiP20, XiaomiNote", 
"Remove - Samsung", 
"Bonus phone - XiaomiNote:Iphone5", 
"End"])

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10", 
"Last - SamsungA50", 
"Add - MotorolaG5", 
"End"]) 