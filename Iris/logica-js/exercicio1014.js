// real distanciaTotalKm, combustivelGastoL, consumoMedio
    // escreva("Distância percorrida em km: ")
    // leia(distanciaTotalKm)
    // escreva("Combustível gasto em litros: ")
    // leia(combustivelGastoL)
    // consumoMedio = distanciaTotalKm/combustivelGastoL
    // escreva("O consumo médio é: " + consumoMedio)

    function calcularConsumo(){
    let distanciaTotalV
    let combustivelGastoV
    distanciaTotalV = document.getElementById("distanciaTotal").value
    combustivelGastoV = document.getElementById("combustivelGasto").value
    document.getElementById("resultadoConsumo").innerHTML = distanciaTotalV/combustivelGastoV
}
