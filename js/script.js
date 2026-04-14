
const boutons = document.querySelectorAll(".bouton_modale")



const modal = document.querySelector(".modal")


for (let i = 0; i < boutons.length; i++) {
    const bouton_modale = boutons[i];
    

    bouton_modale.addEventListener("click", openModal)
}

function openModal(){
    modal.classList.add("visible")

    console.log(modal)

    modal.add
}

modal.addEventListener("click", closeModal)

function closeModal(){
    modal.classList.remove("visible")
}