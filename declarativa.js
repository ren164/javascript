function mostrarMensagem() {
    console.log("Olá")
 }

 mostrarMensagem()

 function contarAteTres() {
    for(let i = 1; i <= 3; i++){
        console.log(i)
    }
 }
 contarAteTres()


 function somar(a, b){
    let resultado = a + b
    return resultado
 }
console.log(somar(6,23))
console.log(somar(123,431))
console.log(somar(163,7))

function aoQuadrado(numero) {
    let quadrado = numero * numero 
    return quadrado
}

console.log(aoQuadrado(6))

//ex1

function javaScript(){
    console.log("eu gosto de JavaScript")
}
 javaScript()

//ex2

function contarAteCinco() {
    for(let a = 1; a <= 5; a++){
        console.log(a)
    }
 }
contarAteCinco()

//ex3


function seuNome(){
    let seuNome = prompt("qual seu nome?")
    console.log("bem-vindo," ,seuNome,)
}
seuNome()

//ex4

function multiplicarDoisNumeros(c,d){
    let resu = c * d
    return resu
}
console.log(multiplicarDoisNumeros(5,3))

//ex5
let idade = prompt("qual sua idade?")
function verificarIdade(idade){
    
    if(idade >= 18){
        console.log("Maior Idade")
    }else{
        console.log("Menor Idade")
    }
} 
verificarIdade(idade)

//ex 6

let soma = prompt("qual sua idade?")
function verificarIdade(idade){
    
    let resultado = a + b
    return resultado
 }
console.log(somar(6,23))
console.log(somar(123,431))
console.log(somar(163,7))