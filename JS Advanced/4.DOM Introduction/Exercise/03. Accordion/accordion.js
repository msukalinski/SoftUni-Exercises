// function toggle() {
//     const textElement = document.getElementById('extra');
//     const buttonElement = document.getElementsByClassName('button')[0];
//     console.log(buttonElement.textContent = 'Less');

//     if (textElement.style.display === 'none' || textElement.style.display === ''){
//         textElement.style.display = 'block';
//         buttonElement.textContent = 'Less';
//     }else{
//         textElement.style.display = 'none';
//         buttonElement.textContent = 'More';
//     }

//     // textElement.style.display = 
//     // textElement.style.display === 'none' || textElement.style.display === ''
//     // ? 'block'
//     // : 'none';

//     // buttonElement.textContent = 
//     // buttonElement.textContent === 'More' ? 'Less' : 'More';
// }

function toggle() {
    const buttonElement = document.querySelector('.button');
    const textElement = document.getElementById('extra');

    textElement.style.display = 
    textElement.style.display === '' || textElement.style.display === 'none'
    ? 'block' : 'none'

    buttonElement.textContent = buttonElement.textContent === 'More' ? 'Less' : 'More' 
}