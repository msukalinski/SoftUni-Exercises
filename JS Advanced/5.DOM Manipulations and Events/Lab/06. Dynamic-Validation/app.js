function validate() {
    const emailElement = document.getElementById('email');
    emailElement.addEventListener('change', function(event){
        const pattern = /^[a-z]+\@[a-z]+\.[a-z]+/g;

        if (pattern.test(event.currentTarget.value)){
            event.currentTarget.classList.remove('error');
        }else{
            event.currentTarget.classList.add('error');
        }
    })
}