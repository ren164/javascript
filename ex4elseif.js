//ex1
let id = prompt ("sua idade")
if(id <= 12){
    console.log("criança")
} else if (id<17){
    console.log("adolescente")
} else if  (id< 59){
    console.log("adulto")
} else if(id>=60){
    console.log("idoso")
}

//ex2

let graus = prompt ("temperatura")
if(graus <= 10){
    console.log("muito frio")
} else if (graus<20){
    console.log("frio")
} else if  (graus< 30){
    console.log("agradavel")
} else if(graus>30){
    console.log("muito quente")
}

//ex3

let per = prompt (String ("qual seu periodo m, v ou n?"))
if(per =="m"){
    console.log("Matutino")
} else if (per == "v"){
    console.log("Vespertino")
} else if(per == "n"){
    console.log("Noturno")
}

//4

let din = prompt("quanto você comprou?")
if(din <= 100){
    console.log("ganhou 5% de desconto")
} else if (din<200){
    console.log("ganhou 10% de desconto")
} else if  (din>=200){
    console.log("ganhou 15% de desconto")
}

//ex5

let nota = prompt("qual sua nota?")
if(nota > 90){
    console.log("grupo A")
} else if(nota > 80){
    console.log("grupo B")
} else if(nota > 70){
    console.log("grupo c")
} else if(nota > 60){
    console.log("grupo d")
} else if(nota <= 60){
    console.log("grupo f")
}

//ex6

let dia = prompt("Digite um numero de 1 a 7")
if(dia == 1){
    console.log("segunda")
} else if(dia == 2){
    console.log("terça")
} else if(dia == 3){
    console.log("quarta")
} else if(dia == 4){
    console.log("quinta")
} else if(dia == 5){
    console.log("sexta")
} else if(dia == 6){
    console.log("sabado")
} else if(dia = 7){
    console.log("domingo")
}

//ex7

let pis = prompt("quanto você comprou?")
if(pis < 400){
    console.log("pista curta")
} else if (pis < 800){
    console.log("pista media")
} else if(pis < 1500){
    console.log("pista grande")
} else if  (pis>=1500){
    console.log("pista muito grande")
}

//ex8

let pon = prompt("quanto você comprou?")
if(pon < 1000){
    console.log("iniciante")
} else if (pon < 5000){
    console.log("intermediario")
} else if(pon < 10000){
    console.log("avançado")
} else if  (pon>10000){
    console.log("mestre")
}