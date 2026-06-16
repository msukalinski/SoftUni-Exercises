function authorizeUser(service: MockAuthorizationService) {
    return function (target: object, propName: string, descriptor: PropertyDescriptor) {
        const originalGet = descriptor.get!;

        descriptor.get = function () {
            if (!service.canViewData(propName)) {
                throw new Error('You are not authorized to view this information');
            }

            const result = originalGet.call(this);
            return result;
        }

        return descriptor;
    }
}

class MockAuthorizationService {
    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }

    canViewData(property: string) {
        switch (this.userRole) {
            case 'Admin':
                return true;
            case 'PersonalDataAdministrator':
                return ['name', 'age'].includes(property);
            default:
                return false;
        }
    }
}

//example 1
// let mockAuthorizationService = new MockAuthorizationService('Admin');

//example 2
let mockAuthorizationService = new MockAuthorizationService('PersonalDataAdministrator');

//example 3
// let mockAuthorizationService = new MockAuthorizationService('Guest');

class User1 {
    private _name!: string;
    private _age: number;
    private _creditCardNumber: string;

    constructor(name: string, age: number, creditCardNumber: string) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCardNumber;
    }

    @authorizeUser(mockAuthorizationService)
    get name(): string {
        return this._name;
    }

    @authorizeUser(mockAuthorizationService)
    get age(): number {
        return this._age;
    }

    @authorizeUser(mockAuthorizationService)
    get creditCardNumber(): string {
        return this._creditCardNumber;
    }
}

//example 1
// const user1 = new User("John Doe", 30, 'ABCD-1234');
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.creditCardNumber);

//example 2
// const user1 = new User("John Doe", 30, 'ABCD-1234');
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.creditCardNumber);

// example 3
const user1 = new User1("John Doe", 30, 'ABCD-1234');
    console.log(user1.name);
console.log(user1.age);
console.log(user1.creditCardNumber);