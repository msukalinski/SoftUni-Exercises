function partyTime(input) {
    let guestsVIP = [];
    let guestsRegular = [];
    let currentGuest = input.shift();
    while (currentGuest !== 'PARTY'){
        const isVip = !isNaN(currentGuest[0]);
        if (isVip){
            guestsVIP.push(currentGuest);
        }else{
            guestsRegular.push(currentGuest);
        }
        currentGuest = input.shift();
    }
    let allGuests = guestsVIP.concat(guestsRegular);
    for (const guest of input){
        allGuests.splice(allGuests.indexOf(guest), 1);
    }
    console.log(allGuests.length);
    allGuests.forEach(x => console.log(x));
}
partyTime(['7IK9Yo0h',
'9NoBUajQ', 
'Ce8vwPmE', 
'SVQXQCbc', 
'tSzE5t0p', 
'PARTY', 
'9NoBUajQ', 
'Ce8vwPmE', 
'SVQXQCbc'])

// function partyTime(input) {
//     let guestsVIP = new Set();
//     let guestsRegular = new Set();
//     let partyStarted = false;
//     for (const guest of input) {
//         if (guest === 'PARTY') {
//             partyStarted = true;
//             continue;
//         }
//         if (!partyStarted) {
//             if (isNaN(guest[0])){
//                 guestsRegular.add(guest);
//             }else{
//                 guestsVIP.add(guest);
//             }
//         } else {
//             if (isNaN(guest[0])){
//                 guestsRegular.delete(guest);
//             }else{
//                 guestsVIP.delete(guest);
//             }
//         }
//     }
//     console.log(guestsVIP.size + guestsRegular.size);
//     for (const guest of guestsVIP){
//         console.log(guest);
//     }
//     for (const guest of guestsRegular){
//         console.log(guest);
//     }
// }
// partyTime(['7IK9Yo0h',
// '9NoBUajQ', 
// 'Ce8vwPmE', 
// 'SVQXQCbc', 
// 'tSzE5t0p', 
// 'PARTY', 
// '9NoBUajQ', 
// 'Ce8vwPmE', 
// 'SVQXQCbc'])