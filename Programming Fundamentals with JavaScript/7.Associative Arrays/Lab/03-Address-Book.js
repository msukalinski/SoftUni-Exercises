function createAddressBook(arr){
    let addressBook = {};
    for (let line of arr){
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }
    let bookArr = Object.entries(addressBook);
    bookArr.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
    for (const entry of bookArr){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}
createAddressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])