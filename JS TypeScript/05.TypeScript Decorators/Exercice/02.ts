class Age {
    private _age!: number;

    constructor(age: number) {
        this.age = age;
    }

    @checkAge
    set age(val: number) {
        this._age = val;
    }

    // @printAge
    get age() { return this._age; }
}

function checkAge(target: object, propName: string, descriptor: PropertyDescriptor) {
    const originalSet = descriptor.set;
    descriptor.set = function (val: number) {
        if (val < 1 || val > 200) {
            throw new Error('Error: Age must be between 1 and 200');
        }
        originalSet?.call(this, val);
    }
}

// function printAge(target: any, key: string, descriptor: PropertyDescriptor) {
//     let original = descriptor.set;
//     descriptor.set = function(val: number) {
//         console.log(`Age is being set to ${val}`);
//         original?.call(this, val);
//     }
// }

let ageVal = new Age(10);
ageVal.age = 30;
console.log(ageVal.age);