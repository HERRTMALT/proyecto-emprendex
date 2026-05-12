const email = document.querySelector(".input__email");
const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const emailValue = email.value;

    if(validarEmail(emailValue)){
        email.classList.add(".valid_register_style");
        email.classList.remove(".invalid_register_style");
    }
    else {
        email.classList.add(".invalid_register_style");
        email.classList.remove(".valid_register_style");
    }
})
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}