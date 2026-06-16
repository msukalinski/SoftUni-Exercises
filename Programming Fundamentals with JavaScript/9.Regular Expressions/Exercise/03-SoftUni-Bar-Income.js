function barIncome (arr){
    let income = 0;
    let pattern = /\%(?<customer>[A-Z][a-z]+)\%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;
    let command = arr.shift();
    while (command != 'end of shift'){
        let match = command.match(pattern);
        if (match){
            income += (match.groups.count * match.groups.price);
            console.log(`${match.groups.customer}: ${match.groups.product} - ${(match.groups.count * match.groups.price).toFixed(2)}`);
        }
        command = arr.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}
barIncome (['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])