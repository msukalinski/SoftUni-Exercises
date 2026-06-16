function lockedProfile() {
    const buttonElements = document.querySelectorAll('#main .profile button');

    for (const button of buttonElements) {
        button.addEventListener('click', show);

        function show(event) {
            const divElement = Array.from(event.currentTarget.parentElement.children);
            // console.log(divElement);
            const locked = divElement[2].checked;
            const previousElement = event.target.previousElementSibling;
            // console.log(previousElement);
            if (!locked){
                if (event.currentTarget.textContent === 'Show more'){
                    previousElement.style.display = 'inline';
                    event.currentTarget.textContent = 'Hide it';
                }else{
                    previousElement.style.display = '';
                    event.currentTarget.textContent = 'Show more';
                }
            }
        }
    }
}