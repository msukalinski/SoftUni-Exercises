interface CountableSet<T> {
    add(item: T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
    private items: Map<T, number> = new Map();

    // constructor(item: T) {
    //     this.items = item;
    // }

    add(item: T): void {
        const currentCount = this.items.get(item);

        if (currentCount !== undefined) {
            this.items.set(item, currentCount + 1);
        } else {
            this.items.set(item, 1);
        }

        // if (!this.items.has(item)) {
        //     this.items.set(item, 0);
        // }
        // this.items.set(item, this.items.get(item)! + 1)
    }

    remove(item: T): void {
        const currentCount = this.items.get(item);

        if (currentCount !== undefined && currentCount > 0) {
            this.items.set(item, currentCount - 1);
        }

        // if (this.items.has(item)) {
        //     if (this.items.get(item)! > 0) {
        //         this.items.set(item, this.items.get(item)! - 1);
        //     }
        // }
    }

    contains(item: T): boolean {
        const currentCount = this.items.get(item);

        if (currentCount !== undefined && currentCount > 0) {
            return true;
        }

        return false;

        // if (this.items.has(item) && this.items.get(item)! > 0) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    getNumberOfCopies(item: T): number {
        const currentCount = this.items.get(item);

        return currentCount ?? 0;

        // if (!this.items.has(item)) {
        //     return 0;
        // } else {
        //     return this.items.get(item)!;
        // }
    }
}

// let countedSet1 = new CountedSet<string>();
// countedSet1.add('test');
// countedSet1.add('test');
// console.log(countedSet1.contains('test'));
// console.log(countedSet1.getNumberOfCopies('test'));
// countedSet1.remove('test');
// countedSet1.remove('test');
// countedSet1.remove('test');
// console.log(countedSet1.getNumberOfCopies('test'));
// console.log(countedSet1.contains('test'));

let countedSet2 = new CountedSet<200 | 301 | 404 | 500>();
countedSet2.add(404);
countedSet2.add(200);
console.log(countedSet2.contains(404));
console.log(countedSet2.getNumberOfCopies(200));

// countedSet2.add(205); //TS Error
// countedSet2.getNumberOfCopies(350); //TS Error