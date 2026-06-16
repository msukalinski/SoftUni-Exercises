// function passValidator (password){
//     function passLength (str){
//         if (str.length >= 6 && str.length <= 10){
//             return '';
//         }else{
//             return 'Password must be between 6 and 10 characters\n';
//         }
//     }
//     function LettersAndDigits (str){
//         let isLetterDigit = true;
//         for (const char of str) {
//             let code = char.charCodeAt();
//             if (code < 48 || code > 57 && code < 65 || code > 90 && code < 97 || code > 122){
//                     isLetterDigit = false;
//             }
//         }
//         return isLetterDigit ? '' : `Password must consist only of letters and digits\n`;
//     }
//     function twoDigits (str){
//         let count = 0;
//         for (const char of str) {
//             let code = char.charCodeAt();
//             if (code >= 48 && code <= 57){
//                 count++;
//             }
//         }
//         if (count >= 2){
//             return '';
//         }else{
//             return 'Password must have at least 2 digits';
//         }
//     }
//     let result = '';
//     result = passLength(password) + LettersAndDigits(password) + twoDigits(password);
//     return result ? result : 'Password is valid'
// }
// let result = passValidator ('log1%4');
// console.log(result);



const isLengthValid = (password) => password.length >= 6 && password.length <= 10;

const isAlphaNumeric = (password) => /^[a-zA-z0-9]+$/.test(password);

const hasAtLeastTwoDigits = (password) => {
    const digitsCount = password.split('').filter(char => /\d/.test(char)).length;
    return digitsCount >= 2;
};

const ValidatePassword = (password) => {
    isvalid = true;

    if (!isLengthValid(password)){
        console.log('Password must be between 6 and 10 characters');  ;
        isvalid = false;
    }

    if (!isAlphaNumeric(password)){
        console.log('Password must consist only of letters and digits');
        isvalid = false;
    }

    if (!hasAtLeastTwoDigits(password)){
        console.log('Password must have at least 2 digits');
        isvalid = false;
    }

    if (isvalid){
        console.log('Password is valid');
    }
}
ValidatePassword ('Pass123')