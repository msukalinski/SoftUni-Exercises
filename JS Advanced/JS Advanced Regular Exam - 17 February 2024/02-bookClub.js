class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        const findBook = this.books.find(b => b.title === title);

        if (findBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        }
        this.books.push({ title, author });

        return `The book "${title}" by ${author} has been added to ${this.library} library.`;
    }

    addMember(memberName) {

        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`;
        }
        this.members.push(memberName);

        return `Member ${memberName} has been joined to the book club.`;
    }

    assignBookToMember(memberName, bookTitle) {
        if (!this.members.includes(memberName)) {
            throw Error(`Member ${memberName} not found.`);
        }

        const findBook = this.books.find(b => b.title === bookTitle);

        if (!findBook) {
            throw Error(`Book "${bookTitle}" not found.`);
        }

        this.books = this.books.filter(b => b.title !== bookTitle);

        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${findBook.author}.`;
    }

    generateReadingReport() {
        if (this.members.length <= 0) {
            return `No members in the book club.`;
        }

        if (this.books.length <= 0) {
            return `No available books in the library.`;
        }
        let availableBooks = [];

        availableBooks.push(`Available Books in ${this.library} library:`);
        this.books.forEach(book => availableBooks.push(`"${book.title}" by ${book.author}`));

        return availableBooks.join('\n');
    }
}
const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());