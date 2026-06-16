function adAstra (arr){
    let pattern = /(\#|\|)(?<item>[A-Za-z\ ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cals>\d+)\1/g;
    let items = [];
    let text = arr.shift();
    let totalCals = 0;
    let matches = text.matchAll(pattern);
    for (const match of matches){
        let {item, date, cals} = match.groups;
        totalCals += Number(cals);
        items.push({item, date, cals});
    }
    let daysCount = Math.floor(totalCals / 2000);
    console.log(`You have food to last you for: ${daysCount} days!`);
    if (items.length > 0){
        items.forEach(item => {
            console.log(`Item: ${item.item}, Best before: ${item.date}, Nutrition: ${item.cals}`);
        })
    }
}
adAstra (['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
// adAstra ([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])