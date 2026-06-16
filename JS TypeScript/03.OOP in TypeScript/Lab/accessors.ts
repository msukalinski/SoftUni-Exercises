const fullNameMaxLength = 10;

class Employee {
    private _fullName!: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error('fullName has max length of ' + fullNameMaxLength);
        }
        this._fullName = newName;
    }
}