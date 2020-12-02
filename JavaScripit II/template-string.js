let meuNome = "Denise";
let meuSobrenome = "Oliveira";
let minhaProfissao = "Analista de Processos OP I";

//Sem Template string
console.log(
    "Olá, eu sou " + meuNome + " " + meuSobrenome + " minha profissão é: " + minhaProfissao);

//Com Template string
console.log(
    `Olá, eu sou a ${meuNome} ${meuSobrenome}, minha profissão é: ${minhaProfissao}`);

//Com Template string - resultado da soma
console.log(
    `O resultado da soma de 1 + 1 = ${1 + 1}`);

console.log(
        `O objeto json ${{chave: "valor" }}`);

        let meuObejeto = {
            chave: "novo valor"
        }