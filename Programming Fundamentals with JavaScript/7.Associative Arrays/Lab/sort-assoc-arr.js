let phoneBook = {
    ivan: '123456768',
    gosho: '4354573423',
    pesho: '12354357567',
    ivo: '4563234123',
    dancho: '92348213',
};
// convert associative array to normal array
let phoneBookEntries = Object.entries(phoneBook);
//sort the array
phoneBookEntries.sort((kvpA, kvpB) => kvpA[1].localeCompare(kvpB[1]));
// phoneBookEntries.sort (([keyA], [keyB]) => keyA.localeCompare(keyB))
//optional: convert back to associative array
let sortedPhoneBook = Object.fromEntries(phoneBookEntries);
console.log(sortedPhoneBook);