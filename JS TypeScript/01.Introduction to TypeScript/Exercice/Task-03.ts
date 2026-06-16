function getLength (arr: string[]) {
    let res = arr.join('');

    return [res, res.length];
}

console.log(getLength (['How', 'are', 'you?']));