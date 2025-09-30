// let senha //sq05.1
// senha = Number (prompt ("Digite a senha: "))
// if  (senha == 1234) {
//     alert("Acesso permitido")
// }else{
//     alert("Acesso negado")
// } 


//sq05.2
// let numeroA
// let numeroB
// numeroA = Number (prompt("Digite o número A: "))
// numeroB = Number (prompt("Digite o número B: "))
// if (numeroA > numeroB){
//     alert("O número A é maior!")
// }
// else if (numeroB > numeroA){
//     alert("O número B é maior!")
// }
// else {
//     alert("Os números A e B são iguais.")
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
// let dias
// let valorDiaria
// let totalBruto, totalLiquido
// let desconto10, desconto15, multa = 150


// dias = Number (prompt("Quantos dias? "))
// if(dias <= 5){
//     valorDiaria = 100
// }
// else if (dias <= 10){
//     valorDiaria = 90
// }
// else{
//     valorDiaria = 80
// }
// totalBruto = dias * valorDiaria
// console.log (totalBruto)
// desconto10 = totalBruto * 10/100
// desconto15 = totalBruto * 15/100
// totalLiquido = totalBruto - (desconto10 + desconto15) + multa

// alert ("Número de dias: " + dias 
//     + "\nValor por diária: R$" + valorDiaria.toFixed(2) 
//     + "\nTotal bruto: R$" + totalBruto.toFixed(2) 
//     + "\nDesconto especial: R$" + desconto10.toFixed(2)  
//     + "\nDesconto convênio: R$" + desconto15.toFixed(2) 
//     + "\nMulta: R$" + multa.toFixed(2)  
//     + "\n===============" + "\nTotal a pagar: R$" + totalLiquido.toFixed(2).replace(".",","))


// sq 05.8
// let idade
// idade = Number (prompt("Digite sua idade: "))
// if(idade < 16){
//     alert("Você não pode votar!")
// }
// else if (idade == 16 || idade ==17){
//     alert("Voto facultativo!")
// }
// else if (idade >= 18 && idade <= 65){
//     alert("Voto obrigatório!")
// }
// else {
//     alert ("Voto facultativo!")
// }


// sq 05.9
// let altura
// let genero
// let peso
// altura = Number (prompt("Digite sua altura em metros: "))
// genero = Number (prompt("Digite seu gênero (1 para feminino e 2 para masculino)"))
// if (genero == 1){
//     peso = (62.1 * altura) - 44.7
// }
// else{
//     peso = (72.7 * altura) - 58
// }
// alert ("Seu peso ideal é: " + peso.toFixed(1))


// sq 05.10
// let quantidadeMacas
// let preco
// quantidadeMacas = Number (prompt("Digite a quantidade de maçãs que foram compradas: "))
// if (quantidadeMacas > 12){
//     preco = quantidadeMacas * 0.30
// }
// else{
//     preço = quantidadeMacas * 0.25
// }

