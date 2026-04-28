const divForm = document.getElementById("formularioPrincipal")

document.addEventListener("DOMContentLoaded", ()=> {

    divForm.addEventListener("click", (e) => {

        if (e.target.closest(".btn-cambio")) {
            divForm.classList.toggle("modo-login");
            divForm.classList.toggle("modo-register");
        }

    });


})
