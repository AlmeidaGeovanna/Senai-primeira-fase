// setTimeout(()=>{
//     console.log("Executei depois de 3 seg")
// },3000)

function saudacao(){
    console.log("olá")
}

function imprimeDado(){
    console.log("imprimir")
}
const soma = ()=> console.log(5+2)
setTimeout(imprimeDado,5000)
saudacao()
setTimeout(soma,3000)
// function soma(){
//     console.log(10+10)
// }
// setTimeout(soma,2000)