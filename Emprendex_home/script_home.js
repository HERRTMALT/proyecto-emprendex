//recarga del logo a la pagina de inicio
const logo = document.querySelector(".logo");
logo.addEventListener("click", ()=> {
    window.location.href = "../Emprendex_home/Home_Emprendex.html";
})

//redireccionamiento a productos
const product = document.querySelectorAll(".product");
product.forEach((p) => {
    p.addEventListener("click", function () {
        window.location.href = "../Product_index/Product_index.html";
    });
});

//redireccionamiento a perfil, configuracion y ayuda
const profileLink = document.querySelector(".svg-profile");
profileLink.addEventListener("click",  ()=> {
    window.location.href = "../Profile/profile.html";
});
const settingsLink = document.querySelector(".svg-settings");
settingsLink.addEventListener("click",  ()=> {
    window.location.href = "../Settings/Settings_index.html";
});
const helpLink = document.querySelector(".svg-help");
helpLink.addEventListener("click",  ()=> {
    window.location.href = "../Help/Help-index.html";
});