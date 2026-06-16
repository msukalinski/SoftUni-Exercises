function demo(arr) {
    let piecesCount = Number(arr.shift());
    let list = {};

    for (let index = 0; index < piecesCount; index++) {
        const [piece, composer, key] = arr[index].split('|');
        list[piece] = { composer, key };
    }

    for (let index = piecesCount; index < arr.length; index++) {
        const tokens = arr[index].split('|');
        const command = tokens.shift();

        if (command == 'Stop') break;

        if (command == 'Add') {
            const [piece, composer, key] = tokens;

            if (list.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                list[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command == 'Remove') {
            const piece = tokens;
            if (piece in list){
                delete list[piece];
                console.log(`Successfully removed ${piece}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command == 'ChangeKey') {
            const [piece, newKey] = tokens;

            if (piece in list){
                list[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    for (let piece in list){
        console.log(`${piece} -> Composer: ${list[piece].composer}, Key: ${list[piece].key}`);
    }
}

demo(['3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop']);