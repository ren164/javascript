let foto = document.getElementById("foto")

foto.addEventListener("mouseover", function(){
    foto.setAttribute("src", "sim.jpg")
})
foto.addEventListener("mouseout", function(){
    foto.setAttribute("src", "sonic.jpg")
})
let lista = document.getElementById("lista")
let adicionar = document.getElementById("adicionar")
let remover = document.getElementById("remover")

adicionar.addEventListener("click", function(){
    let novoitem = document.createElement("li")
    novoitem.innerText= "novo item"
    lista.appendChild(novoitem) 
})
remover.addEventListener("click", function(){
    if(lista.lastChild){
        lista.removeChild(lista.lastChild)
    }
})