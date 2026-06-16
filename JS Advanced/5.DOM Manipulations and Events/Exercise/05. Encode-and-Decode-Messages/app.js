function encodeAndDecodeMessages() {
    const buttonElements = document.querySelectorAll('button');

    for (const button of buttonElements) {
        if (button.textContent === 'Encode and send it') {
            button.addEventListener('click', encoding);
        } else if (button.textContent === 'Decode and read it') {
            button.addEventListener('click', decoding);
        };
    };

    function encoding(event) {
        const msgElement = event.target.previousElementSibling;
        const parentElement = event.target.parentElement.parentElement;
        const resultBox = parentElement.querySelector('div:last-child textarea');
        const splitted = msgElement.value.split('').map((a) => String.fromCharCode(a.charCodeAt(0) + 1)).join('');
        resultBox.textContent = splitted;
        msgElement.value = '';
    }

    function decoding(event) {
        const msgElement = event.target.previousElementSibling;
        const splitted = msgElement.value.split('').map((a) => String.fromCharCode(a.charCodeAt(0) - 1)).join('');
        msgElement.value = splitted;
    }
}
// console.log(result.join(''));


// function encodeAndDecodeMessages() {
//     const buttonElements = Array.from(document.querySelectorAll('button'));
//     const textHoldersElement = Array.from(document.querySelectorAll('textarea'));

//     buttonElements[0].addEventListener('click', encode);
//     buttonElements[1].addEventListener('click', decode);

//     function nextChar(char){
//         return String.fromCharCode(char.charCodeAt(0) + 1);
//     }
//     function previousChar(char){
//         return String.fromCharCode(char.charCodeAt(0) - 1);
//     }
    
//     function transform(text, fn){
//         return text.split('').map(fn).join('');
//     }

//     function encode() {
//         textHoldersElement[1].value = transform(textHoldersElement[0].value, nextChar);
//         textHoldersElement[0].value = '';
//     };

//     function decode() {
//         textHoldersElement[1].value = transform(textHoldersElement[1].value, previousChar);
//     };
// }