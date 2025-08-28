programa {
  funcao inicio() {
    // real notaA, notaB, media, pesoA, pesoB
    // pesoA = 3.5
    // pesoB = 7.5
    // escreva("Nota 1: ")
    // leia(notaA)
    // escreva("Nota 2: ")
    // leia(notaB)
    // media = (notaA*pesoA + notaB*pesoB) / (pesoA+pesoB)
    // escreva("Média: " + media)


    // real notaA1, notaB1, notaC1, media, pesoA1, pesoB1, pesoC1
    // pesoA1 = 2
    // pesoB1 = 3
    // pesoC1 = 5
    // escreva("Nota 1: ")
    // leia(notaA1)
    // escreva("Nota 2: ")
    // leia(notaB1)
    // escreva("Nota 3: ")
    // leia(notaC1)
    // media = (notaA1*pesoA1 + notaB1*pesoB1 + notaC1*pesoC1) / (pesoA1+pesoB1+pesoC1)
    // escreva("Média: " + media)


    // real matriculaFuncionario, horasTrabalhadas, valorHora, salario
    // escreva("Matricula do Funcionário: ")
    // leia(matriculaFuncionario)
    // escreva("Horas trabalhadas: ")
    // leia(horasTrabalhadas)
    // escreva("Valor da hora trabalhada: ")
    // leia(valorHora)
    // salario = valorHora*horasTrabalhadas
    // escreva("Seu salário é de R$ " + salario)


    // cadeia nomeVendedor
    // real salarioFixo, vendasMensais, comissao, salarioComissionado //15/100
    // escreva("Digite o valor do salário fixo: R$ ")
    // leia(salarioFixo)
    // escreva("Digite o valor das vendas mensais: R$ ")
    // leia(vendasMensais)
    // comissao = vendasMensais*15/100
    // escreva("O valor da sua comissão é de: R$ " + comissao)
    // salarioComissionado = salarioFixo + comissao
    // escreva("\nSalário comissionado: R$ " + salarioComissionado)


    // real codigo1, numeroPecas1, valorUnitario1, codigo2, numeroPecas2, valorUnitario2, valorPago
    // escreva("Código da peça 1: ")
    // leia(codigo1)
    // escreva("Número de peças: ")
    // leia(numeroPecas1)
    // escreva("Valor unitário: R$ ")
    // leia(valorUnitario1)
    // escreva("Código da peça 2: ")
    // leia(codigo2)
    // escreva("Número de peças: ")
    // leia(numeroPecas2)
    // escreva("Valor unitário: R$ ")
    // leia(valorUnitario2)
    // valorPago = numeroPecas1*valorUnitario1 + numeroPecas2*valorUnitario2
    // escreva("Valor a pagar: R$ " + valorPago)


    // real distanciaTotalKm, combustivelGastoL, consumoMedio
    // escreva("Distância percorrida em km: ")
    // leia(distanciaTotalKm)
    // escreva("Combustível gasto em litros: ")
    // leia(combustivelGastoL)
    // consumoMedio = distanciaTotalKm/combustivelGastoL
    // escreva("O consumo médio é: " + consumoMedio)


    //valor/100= retorna quociente da divisão. valor%100 = retorna resto da divisão
    
    inteiro valor, notas100, notas50, notas20, notas10, notas5, notas2, notas1
    valor = 576
    
    notas100 = valor / 100 //5
    valor = valor % 100 //76

    notas50 = valor / 50 //1
    valor = valor % 50 //26

    notas20 = valor / 20 //1
    valor = valor % 20  //6

    notas10 = valor / 10 //0
    valor = valor % 10  //6

    notas5 = valor / 5 //1
    valor = valor % 5 //1

    notas2 = valor / 2 //0
    valor = valor % 2 //1

    notas1 = valor

    escreva("\nNotas R$100: " + notas100)
    escreva("\nNotas R$50: " + notas50)
    escreva("\nNotas R$20: " + notas20)
    escreva("\nNotas R$10: " + notas10)
    escreva("\nNotas R$5: " + notas5)
    escreva("\nNotas R$2: " + notas2)
    escreva("\nNotas R$1: " + notas1)



  }
}
