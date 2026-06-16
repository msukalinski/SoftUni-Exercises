class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log('Amount must be positive');
            return;
        }
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log('Amount must be positive');
            return;
        }

        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log('This operation is not allowed');
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const account1 = new BankAccount(100);
account1.deposit(-100);
account1.withdraw(30);
console.log(account1.getBalance());

const account2 = new BankAccount(20);
account2.withdraw(30);
console.log(account2.getBalance());