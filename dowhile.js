//ex 1

let contador = 1
do {
    console.log(contador)
    contador += 1
} while (contador <= 20)

//ex 2

let num;

do{
     num = prompt("quer continuar?(s/n)")
}
while(num == "s")

//ex 3
let um = 1
let numero = Number(prompt("escolha um numero"))

do {
    console.log(um)
    um ++
} while (um <= numero)

//ex 4

let n = 1
do {
    console.log(n)
    n += 2
} while (n <= 31)

//ex 5

let pern; 
let numb = 0;

do{
    let per = Number(prompt("escolha um numero"))
if (per < 0){
    console.log("negativo")
} else if(per > 0){
    console.log("positivo")
} else{
    console.log("zero")
}
console.log(numb)
numb++
}while(numb!=5)

//ex6

do{
    num = prompt("quer continuar?(s/n)")
}
while(num == "s")
