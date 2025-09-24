// let idade //sq02 - 1
// idade = Number ( prompt ("Digite sua idade: "))
// if(idade >=18){
//     alert("Maior de idade")
// }else{
//     alert("Menor de idade")
// }
// console.log(idade);


// let numeroAleatorio //sq02 - 2
// let tentativa
// numeroAleatorio = Number (prompt ("Digite um número: "))
// tentativa = Number (prompt("Tente adivinhar o número aleatório: "))
// if (numeroAleatorio == tentativa) {
//     alert("Você acertou!")
// }else{
//     alert("Você errou")
// }


// let numero //sq02 - 4
// numero = Number (prompt ("Digite um número: "))
// if (numero  % 2 == 0){
//       alert("Número par")
// }else{
//     alert("Número ímpar")
// }


// let senha //sq05.1
// senha = Number (prompt ("Digite a senha: "))
// if  (senha == 1234) {
//     alert("Acesso permitido")
// }else{
//     alert("Acesso negado")
// } 


//sq05.3
// let numeroDaPlaca
// numeroDaPlaca = Number (prompt("Digite o último número da placa: "))
// if (numeroDaPlaca == 0 || numeroDaPlaca == 1){
//     alert("Não pode rodar na segunda-feira!")
// }
// else if (numeroDaPlaca == 2 || numeroDaPlaca == 3){
//     alert("Não pode rodar na terça-feira!")
// }
// else if (numeroDaPlaca == 4 || numeroDaPlaca == 5){
//     alert("Não pode rodar na quarta-feira!")
// }
// else if (numeroDaPlaca == 6 || numeroDaPlaca == 7){
//     alert("Não pode rodar na quinta-feira!")
// }
// else if (numeroDaPlaca == 8 || numeroDaPlaca == 9){
//     alert("Não pode rodar na sexta-feira!")
// }
// else{
//     alert("Digite APENAS O ÚLTIMO NÚMERO da placa")
// }

//sq05.4
// let numeroPalestra
// numeroPalestra = Number (prompt("Digite o número da palestra que você deseja participar (1 a 4): "))
// if (numeroPalestra == 1 ){
//     alert ("Animações com Scratch, laboratório 305, ás 19h")
// }
// else if (numeroPalestra == 2){
//     alert("Scratch para gamers, laboratório 512, ás 20h")
// }
// else if (numeroPalestra == 3){
//     alert("JavaScript para leigos, laboratório 101, ás 19h")
// }
// else if (numeroPalestra == 4){
//     alert("Tópicos avançados de JavaScript, laboratório 305, ás 20h")
// }
// else if (numeroPalestra == 5){
//     alert("Vida e carreira, auditório, ás 21h")
// }


//sq05.5
// let nota1
// let nota2
// let media
// nota1 = Number ( prompt ("Digite a primeira nota: "))
// nota2 = Number ( prompt ("Digite a segunda nota: "))
// media = Number (nota1 + nota2)/2
// alert("Sua média é " + media)
// if(media >=7 ){
//     alert("Você passou!")
// }
// else{
//     alert("Você reprovou")
// }


//sq 05.6
// let pontuacao
// pontuacao = Number ( prompt ("Digite sua pontuação: "))
// if(pontuacao <=10 ){
//     alert ("Deu ruim!")
// }
// else if (pontuacao >10 && pontuacao <= 100){
//     alert("Pode melhorar!")
// }
// else if (pontuacao >100 && pontuacao <= 200){
//     alert("Supimpa!")
// }
// else {
//     alert("Mitou!")
// }


// sq 05.7
let dias
let valorDiaria
let totalBruto, totalLiquido
let desconto10, desconto15, multa = 150


dias = Number (prompt("Quantos dias? "))
if(dias <= 5){
    valorDiaria = 100
}
else if (dias <= 10){
    valorDiaria = 90
}
else{
    valorDiaria = 80
}
totalBruto = dias * valorDiaria
console.log (totalBruto)
desconto10 = totalBruto * 10/100
desconto15 = totalBruto * 15/100
totalLiquido = totalBruto - (desconto10 + desconto15) + multa

alert ("Número de dias: " + dias 
    + "\nValor por diária: R$" + valorDiaria.toFixed(2) 
    + "\nTotal bruto: R$" + totalBruto.toFixed(2) 
    + "\nDesconto especial: R$" + desconto10.toFixed(2)  
    + "\nDesconto convênio: R$" + desconto15.toFixed(2) 
    + "\nMulta: R$" + multa.toFixed(2)  
    + "\n===============" + "\nTotal a pagar: R$" + totalLiquido.toFixed(2).replace(".",","))


