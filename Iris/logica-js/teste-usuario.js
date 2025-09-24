const prompt = require("prompt-sync")()
let usuario
let senha
usuario = prompt ("Usuário admin? (sim ou nao): ")
senha = prompt ("Digite sua senha: ")
if (usuario === ("sim") && senha  === ("1234")){
    console.log("Acesso permitido!")
} else {
    console.log("Acesso negado")
}