function demo(num) {
    let chessboard = '<div class="chessboard">\n';

    for (let row = 0; row < num; row++){
        chessboard += ' <div>\n';

        for (let col = 0; col < num; col++){
            let squareColor = (row + col) % 2 == 0 ? 'black' : 'white';
            chessboard += `    <span class="${squareColor}"></span>\n`
        }
        chessboard += '</div>\n';
    }
    chessboard += '</div>';
    console.log(chessboard);
}
demo(3)