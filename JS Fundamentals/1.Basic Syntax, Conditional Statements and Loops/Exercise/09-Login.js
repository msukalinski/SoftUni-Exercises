function demo(arr) {
    let index = 0;
    let username = arr[index++];
    let password = username.split('').reverse().join('');
    let counter = 0;

    for (let i = 1; i < arr.length; i++) {
        let attemptedPassword = arr[i];
        if (attemptedPassword == password) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            counter++;
            if (counter == 4) {
                console.log(`User ${username} blocked!`);
                return;
            } else {
                console.log('Incorrect password. Try again');
            }
        }
    }
}
demo(['Acer', 'login', 'go', 'let me in', 'recA'])
demo (['momo','omom'])
demo(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])