let pattern = /(?<funcName>\w+)\(\)/g;
let text = 'The Object.seal() static method seals an object. Sealing an object() prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties() cannot be added(), existing properties cannot() be removed, their enumerability and configurability cannot be changed, and its prototype() cannot be re-assigned.';

let match = pattern.exec(text);
// console.log(match[0]);
// match = pattern.exec(text);
// console.log(match[0]);
// match = pattern.exec(text);
// console.log(match[0]);

//run all matches
while (match){
    console.log(match.groups.funcName); //named capturing group
    console.log(`Found ${match[0]} on index ${match.index} - ${match[1]}`);//number capturing group
    match = pattern.exec(text);
}