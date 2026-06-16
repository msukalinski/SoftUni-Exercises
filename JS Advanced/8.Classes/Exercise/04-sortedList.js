class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    add(element) {
        this.collection.push(element);
        this.collection.sort((a, b) => a - b);
        this.size++
    }

    remove(idx) {
        if (idx < 0 || idx >= this.collection.length) {
            throw new Error('Index out of range');
        }
        this.collection.splice(idx, 1);
        this.size--;
    }

    get(idx) {
        if (idx < 0 || idx >= this.collection.length) {
            throw new Error('Index out of range');
        }
        return this.collection[idx];
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);