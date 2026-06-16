class User {
    private _username: string;

    constructor (username: string) {
        if (username.length < 3) {
            throw new Error('Username must be at least 3 characters long');
        }
        this._username = username;
    }

    
    public get username() : string {
        return this._username;
    }

    
    public set username(newUsername : string) {
        if (newUsername.length < 3) {
            throw new Error('Username must be at least 3 characters long.');
        }

        this._username = newUsername;
    }
}

const user = new User("Martin"); //Correct
user.username = "johnDoe";
console.log(user.username);

// const user = new User("jo"); //Error

// const user = new User("Martin"); //Error
// user.username = "Do";