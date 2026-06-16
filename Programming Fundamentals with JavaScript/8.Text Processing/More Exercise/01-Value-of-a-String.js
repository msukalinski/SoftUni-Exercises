function demo(arr) {
    let inputStr = arr[0];
    let caseType = arr[1];
    let sum = 0;

    for (const char of inputStr){
        if (caseType === 'UPPERCASE' && char >= 'A' && char <= 'Z'){
            sum += char.charCodeAt(0);
        }else if (caseType === 'LOWERCASE' && char >= 'a' && char <= 'z'){
            sum += char.charCodeAt(0);
        }
    }
    console.log(`The total sum is: ${sum}`);
}

demo(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
demo(['AC/DC', 'UPPERCASE'])