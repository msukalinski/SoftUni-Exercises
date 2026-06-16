// function colorize() {
//     const evenRowElements = document.querySelectorAll('table tr:nth-child(even)');

//     for (rowElements of evenRowElements){
//         rowElements.style.backgroundColor = 'teal';
//     }
// }

function colorize() {
    let rows = document.querySelectorAll('table tr');
    for (let index = 1; index < rows.length; index++) {
        if (index % 2 !== 0) {
            rows[index].style.background = 'teal';
        }
    }
}