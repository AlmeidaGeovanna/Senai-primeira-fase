function mostrarMensagem(){
    alert("Mensagem")
    alert("resto da mensagem")
}

function executarExercicio(){
    // let nome = prompt("Digite seu nome: ")
    // alert("Olá " + nome)
    let nome = document.getElementById("entrada").value
    document.getElementById("resultado").innerHTML = "Olá " + nome
}

function efetuarLogin(){
    let resultado = document.getElementById("resultadoLogin")
    console.log(resultado);
    let user = document.getElementById("username").value
    if(user == "Iris"){
        resultado.innerHTML = "Login efetuado com sucesso"
    }else{
        resultado.innerHTML = "Credenciais incorretas"
    }
}

