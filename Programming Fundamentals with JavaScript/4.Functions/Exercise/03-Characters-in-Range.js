function charactersInRange (a, b){
    let first = a.charCodeAt();
    let second = b.charCodeAt();
    function charLine (a, b){
        let line = '';
    for (let i = a + 1; i < b; i++){
        line += String.fromCharCode(i) + ' ';
        }
        return line;
    }
    return first > second ? charLine (second, first) : charLine (first, second);
}
let result = charactersInRange ('a', 'h');
console.log(result);