export { }

interface Human {
    greet(): string;
}

class Person implements Human {
    greet(): string {
        return 'Hello there';
    }
}