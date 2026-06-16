class Student {
    protected firstName: string;
    protected lastName: string;
    protected year: number;

    static studentCount = 0;

    constructor(firstName: string, lastName: string, year: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        Student.studentCount++;
    }

    printInfo(): void {
        console.log(`${this.firstName} ${this.lastName} is in year ${this.year}`);
    }
}

let student1 = new Student('Peter', 'Johnson', 10);
student1.printInfo();

class GraduateStudent extends Student {
    private _thesisTitle!: string;

    constructor(firstName: string, lastName: string, year: number, thesisTitle: string) {
        super(firstName, lastName, year);
        this._thesisTitle = thesisTitle;
    }

    get thesisTitle(): string {
        return this._thesisTitle;
    }

    set thesisTitle(newTitle: string) {
        if (newTitle.length > 0) {
            this._thesisTitle = newTitle;
        }else {
            console.log('Invalid thesis title');
        }
    }

    override printInfo(): void {
        // console.log(`${this.firstName} ${this.lastName} is in year ${this.year}`) //or
        super.printInfo();
        console.log(`Thesis title: ${this.thesisTitle}`);
    }
}

let student2 = new GraduateStudent('John', 'Peterson', 2, 'Physics');
student2.thesisTitle = 'asdsddf';
student2.printInfo();

console.log(Student.studentCount);