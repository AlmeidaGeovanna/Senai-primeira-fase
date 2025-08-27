programa {
  funcao inicio() {
    //algoritmo que verifica se um numero é positivo, negativo ou zero
    real numero
    escreva("Digite um número: ")
    leia(numero)
    se(numero>0){
      escreva("Número positivo")
    } senao se (numero<0){
      escreva("Número negativo")
    } senao {
      escreva("Número zero")
    }
  }
}
