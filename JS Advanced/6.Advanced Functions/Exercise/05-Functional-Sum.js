function add(n) {
    let result = 0;
    result += n;

    function sum(n) {
        result += n;
        return sum;
    }
    sum.toString = () => result;
    return sum;
}
console.log(add(1)(6)(-3).toString());