function attachGradientEvents() {
    const resultElement = document.getElementById('result');
    const gradientElement = document.getElementById('gradient');
    const result2Element = document.getElementById('result2');
    

    gradientElement.addEventListener('mousemove', (event) => {
        const currentMousePosition = event.offsetX;
        const currentMousePositionY = event.offsetY;
        const elementHeight = event.target.clientHeight;
        const elementWidth = event.target.clientWidth;
        const percent = Math.floor((currentMousePosition / (elementWidth - 1)) * 100);
        const percentY = Math.floor((currentMousePositionY / (elementHeight - 1)) * 100);
        resultElement.textContent = `${percent}%`;
        result2Element.textContent = `${percentY}%`;
    });
}


// function attachGradientEvents() {
//     const resultElement = document.getElementById('result');
//     const gradientElement = document.getElementById('gradient');

//     gradientElement.addEventListener('mousemove', gradientMove);
//     gradientElement.addEventListener('mouseout', gradientOut);

//     function gradientMove(event){
//         const boxWidth = event.target.clientWidth;
//         const currentMousePosition = event.offsetX / (boxWidth - 1);
//         const percent = Math.floor(currentMousePosition * 100);
//         resultElement.textContent = `${percent}%`;
//     }

//     function gradientOut (){
//         resultElement.textContent = '';
//     }
// }


// function attachGradientEvents() {
//     const gradientElement = document.getElementById('gradient');
//     const resultElement = document.getElementById('result');
//     function moveFunc(event){
//         const currentMousePosition = event.offsetX;
//         const elementWidth = event.target.clientWidth;
//         const percent = Math.floor((currentMousePosition / elementWidth) * 100);
//         resultElement.textContent = `${percent}%`;
//     }
//     function outFunc(){
//         resultElement.textContent = '';
//     }

//     gradientElement.addEventListener('mousemove', moveFunc);
//     gradientElement.addEventListener('mouseout', outFunc);
// }