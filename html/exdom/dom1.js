
let texto = document.getElementById("texto");


let botao1 = document.getElementById("botao1")
botao1.addEventListener("click", function(){
texto.style.color = "red"
})

let botao2 = document.getElementById("botao2")
botao2.addEventListener("click", function(){
botao2.style.backgroundColor = "red"
})

let texto2 = document.getElementById("texto2");


let botao3 = document.getElementById("botao3")
botao3.addEventListener("dblclick", function(){
texto2.style.fontSize = "100px"

}) 

let botao4 = document.getElementById("botao4")
botao4.addEventListener("mouseover", function(){
botao4.style.backgroundColor = "purple"
})

botao4.addEventListener("mouseout", function(){
botao4.style.backgroundColor = ""
})

let botao5 = getElementById("botao5")
botao5.addEventListener("click", function(){
    image.style.width = "454325px"
})