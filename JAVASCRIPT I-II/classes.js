/* Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança 
sempre que dou um new significa que estou criando um objeto em memoria, passa a ser um agregado de funções e propriedades
*/

class Matematicas {
    soma(valorA, valorB) {
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
}

var instanciaMatematica = new Matematicas();
var resultado = instanciaMatematica.soma(4, 7);

console.log(resultado);
