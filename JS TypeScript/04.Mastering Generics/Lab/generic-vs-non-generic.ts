export { };

// function echo(arg: number) {
//     return arg;
// }

// function echo(arg: string) {
//     return arg;
// }

function echo<T>(arg: T) {
    console.log(typeof arg);
    return arg;
}

echo(1111);
echo('asd');