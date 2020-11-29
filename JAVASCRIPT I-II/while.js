/* Estrutura de Repetição: While 
    Enquanto algo for verdadeiro repita
    O While  vai testar uma condição
    operador de exclamação! inversão de valor
*/

var achou = false;

var numeroSorteado = 10;
var possivelValor = 0;

while (!achou) {
    possivelValor += 1;
    if (numeroSorteado == possivelValor) {
        achou = true;
    } else {
        console.log(
            "possivel valor não corresponde ao umero sorteado" + possivelValor
        );
    }
}