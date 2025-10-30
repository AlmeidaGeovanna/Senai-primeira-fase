// real distanciaTotalKm, combustivelGastoL, consumoMedio
    // escreva("Distância percorrida em km: ")
    // leia(distanciaTotalKm)
    // escreva("Combustível gasto em litros: ")
    // leia(combustivelGastoL)
    // consumoMedio = distanciaTotalKm/combustivelGastoL
    // escreva("O consumo médio é: " + consumoMedio)

    function calcularConsumo(){
    let consumo
    let distanciaTotalV
    let combustivelGastoV
    distanciaTotalV = Number (document.getElementById("distanciaTotal").value)
    combustivelGastoV =  Number (document.getElementById("combustivelGasto").value)
    consumo = distanciaTotalV/combustivelGastoV
    document.getElementById("resultadoConsumo").innerHTML = `O consumo foi de ${consumo} km/l`
}
