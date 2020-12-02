/* tomar uma desição sobre uma pergunta ou tipo de informação que pode chegar para mim.
    para isso usamos a estrutura if

    Quando uso apenas um sinal de = é uam atribuição
    Na linha if usamos três sinais de = para perguntar o valor
    O bloco deve ser fechado por chaves {} 
    if - SE
    else - SENÃO
    else if - SENÃO SE
 */

 var nome= "Oliveira"

 if (nome == "Denise") {
     console.log("Legal seu nome é este mesmo?");
 } else if (nome === "Oliveira") {
    console.log("Tudo bem! Você também serve!!!");
 } else {
    console.log("Que pena seu nome não é Debora")
 }
 

/* Usando switch
    Ele vai testar uma serie de regras e valores para chegar no resultado final
    Então dentro do meu swit eu vou ter cases, casos de testes
    O bloco de condição 'switch' é fechado com 'break' 
    Se nenhuma das condições forem satisfeitas, temos dentro da estrutura switch case default que é usado se nenhum dos casos surtir um efeito positivo
*/

var nome = "Oliveira"
switch (nome) {
    case "Denise":
        console.log("Legal! Você é a Denise mesmo!");
        break;
    case "Oliveira":
        console.log("Ah! Você também serve!");
        break
    default:
        console.log("Que pena! Você não é quem eu estou procurando!");
        break;    
} 

