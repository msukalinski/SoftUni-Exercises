function demo(input) {
    let fieldSize = Number(input[0]);
    let ladybugIndexes = input[1].split(' ').map(Number);
    let commands = input.slice(2);

    let field = new Array(fieldSize).fill(0);

    for (let index of ladybugIndexes){
        if (index >= 0 && index < fieldSize){
            field[index] = 1;
        }
    }

    for (let command of commands){
        let [startIndex, direction, flyLength] = command.split(' ');
        startIndex = Number(startIndex);
        flyLength = Number(flyLength);

        if (startIndex < 0 || startIndex >= fieldSize || field[startIndex] !== 1){
            continue;
        }

        field[startIndex] = 0;

        let newIndex = startIndex;
        while(true){
            newIndex += direction === 'right' ? flyLength : -flyLength;

            if (newIndex < 0 || newIndex >= fieldSize){
                break;
            }

            if (field[newIndex] === 0){
                field[newIndex] = 1;
                break;
            }
        }
    }
    console.log(field.join(' '));
}
demo([3, '0 1', '0 right 1', '2 right 1']);
demo([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);