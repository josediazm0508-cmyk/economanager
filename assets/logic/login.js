const divForm = document.getElementById("formularioPrincipal")
const inputUser = document.getElementById("inputUser")
const inputPassword = document.getElementById("inputPassword")

let usuarios = [];

document.addEventListener("DOMContentLoaded", ()=> {

    divForm.addEventListener("click", (e) => {

        if (e.target.closest(".btn-cambio")) {
            divForm.classList.toggle("modo-login");
            divForm.classList.toggle("modo-register");
        }

        if(e.target.closest(".btnSubmitForm")){

            if(divForm.classList.contains("modo-login")){

                if(validarEntrada(inputUser, inputPassword)){

                    alert("validado")

                } else {

                    alert("no validad")

                }

            } else {



            }

        }

    });


})

function validarEntrada(inpUser, inpPass){

    const user = inpUser.value.trim()
    const password = inpPass.value.trim()

    if(user == "" || password == "" || user > 20){

        return false;

    }

    return true;

}