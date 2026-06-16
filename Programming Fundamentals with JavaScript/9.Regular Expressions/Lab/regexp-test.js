let pattern = /\w+\(\)/;
let text = 'The Object.seal() static method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned.';
let hasMatch = pattern.test(text);
console.log(hasMatch);