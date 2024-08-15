document.addEventListener('DOMContentLoaded', function(){
    const inputMail = document.querySelector('.input');
    const errorIcon = document.querySelector('.icon-error');
    const errorText = document.querySelector('.error-text')
    const inputBtn = document.querySelector('.icon-arrow')


    const isValidateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(inputMail.value)){
            errorIcon.classList.remove('active')
            errorText.classList.remove('active')
            inputMail.classList.remove('input-error')
        }else{
            errorIcon.classList.add('active')
            errorText.classList.add('active')
            inputMail.classList.add('input-error')
            
        }
    }
    inputBtn.addEventListener('click', isValidateEmail)
})