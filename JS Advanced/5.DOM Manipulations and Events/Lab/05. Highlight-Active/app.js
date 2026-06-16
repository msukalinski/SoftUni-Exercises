// function focused() {
//     const inputFieldElement = document.querySelectorAll('div input');

//     inputFieldElement.forEach(field => {

//         field.addEventListener('focus', (e) => {
//             field.parentNode.classList.add('focused');
//         });

//         field.addEventListener('blur', (e) => {
//             field.parentNode.classList.remove('focused');
//         });
//     });
// }


function focused() {
    const inputFieldElement = document.querySelectorAll('div input');
    
    inputFieldElement.forEach(field => {
        field.addEventListener('focus', (e) => {
            field.parentElement.classList.add('focused');
        });
        field.addEventListener('blur', (e) => {
            field.parentElement.classList.remove('focused');
        })
    })
}