const form = document.querySelector("form");

const inputName = document.querySelector(".input__name");
const inputLastname = document.querySelector(".input__lastname");
const inputEmail = document.querySelector(".input__email");
const submit = document.querySelector(".input_submit");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const emailValue = email.value;

    if(validarEmail(emailValue)){
        inputEmail.classList.add("valid_register_style");
        inputEmail.classList.remove("invalid_register_style");
    }
    else {
        inputEmail.classList.add("invalid_register_style");
        inputEmail.classList.remove("valid_register_style");
    }
})
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inputEmail);
}


 