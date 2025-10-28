function calcularSoma(){
    let soma 
    let preco 
    let moeda1
    let moeda050
    let moeda025
    let moeda010
    let moeda005

    moeda1 = Number (document.getElementById("moeda1real").value)
    moeda050 = Number (document.getElementById("moeda50c").value)
    moeda025 = Number (document.getElementById("moeda25c").value)
    moeda010 = Number (document.getElementById("moeda10c").value)
    moeda005 = Number (document.getElementById("moeda5c").value)
    soma = moeda1 + moeda050*0.50 + moeda025*0.25 + moeda010*0.10 + moeda005*0.05
    preco = preco - soma
    document.getElementById("resultadoSoma").innerHTML = `O valor acumulado é de R$${soma.toFixed(2)}`


}