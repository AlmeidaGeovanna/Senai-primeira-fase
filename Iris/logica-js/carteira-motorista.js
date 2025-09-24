const prompt = require("prompt-sync")()
let idade
let cnh 
idade = prompt ("Digite sua idade: ")
cnh = prompt ("Possui cnh? (sim ou nao) ")
if (idade >= 18 && cnh === ("sim")){
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir")
}
