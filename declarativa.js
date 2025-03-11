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

let soma1 = Number(prompt("fale um numero"))
let soma2 = Number(prompt("diga outro numero"))

function somas(soma1, soma2){
    
    let resul = soma1 + soma2
    console.log(resul)
 }
 somas(soma1, soma2)

 //ex 7

let altura = Number(prompt("qual altura do retangulo?"))
let largura = Number(prompt("qual a largura do retangulo?"))

function multiplicacao(altura, largura){
    
    let area = altura * largura
    console.log(area)
 }
 multiplicacao(altura, largura)

 //ex 8

 let pessoaUm = prompt("sua idade?")
 let pessoaDois = prompt("idade da outra pessoa?")
function compararIdade(idades){
    
    if(pessoaUm > pessoaDois){
        console.log("pessoa um é mais velha")
    }else{
        console.log("pessoa dois e mais velha")
    }
}
compararIdade(idades)