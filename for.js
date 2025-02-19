//ex1
for (let i = 1; i <= 30; i++) {
    console.log(i);
  }
  console.log("Contagem finalizada!");

//ex 2

for (let a = 30; a >= 1;a--) {
    console.log(a);
  }
  console.log("Contagem finalizada!");

//ex3
console.log("Mewtwo prata👍")

for(let gen = 1; gen <=5; gen++){
    let num = prompt("digite um numero")
    if (num >= 50){
        console.log("acima da media")
    }else{
        console.log("abaixo da media")
    }
}

//ex 4


let numero = 1
for (let tabuada = Number(prompt("Escolha um numero para ver sua tabuada")); numero <= 10; numero++) {
    let = resul = tabuada * numero
    console.log(resul)
}


//ex 5
let m = 0
for (let patinhos = Number(prompt("Quantos patinhos")); patinhos >= 0; patinhos--) {
    console.log( patinhos, 'patinhos foram passear Além das montanhas Para brincar A mamãe gritou: Quá, quá, quá, quá, mas só', patinhos-1, 'patinhos voltaram de lá' )
   }
 console.log("A mamãe patinha foi procurar Além das montanhas Na beira do mar A mamãe gritou: Quá, quá, quá, quá E os patinhos voltaram de lá.")

 
 //ex 6


 for (let gene = 1; gene <= 10; gene++){
    let idade = Number(prompt("informe a idade"))
    if (idade >= 18)
        console.log(idade, "Maior de idade")
    else console.log(idade, "Menor de idade")
 }

//ex7

 
 for (num1 = 1; num1 <= 5; num1++){
    let voto = Number(prompt("Informe seu voto"))
        if (voto = 1){
            console.log("Candidato 1")
        } else if (voto = 2){
            console.log("Candidato 2")
        } else if (voto = 3){
            console.log("Candidato 3")
        } else if (voto = 4){
            console.log("Candidato 4")
        } else if (voto = 5){
            console.log("Voto Nulo")
        } else if (voto = 3){
            console.log("Voto branco")
        } else {
            console.log("Invalido")
        }
 }