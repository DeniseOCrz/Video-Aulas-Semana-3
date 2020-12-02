const pessoa = {
    nome: 'Denise',
    sobrenome: 'Oliveira',
    idade: 31,
    profissao: 'Developer'
}

console.log(pessoa);

/* let nome = pessoa.nome;
let sobreneme = pessoa.sobrenome;
let idade = pessoa.idade;
let profissao = pessoa.profissao; */

let {nome, sobrenome, idade, profissao} = pessoa;

console.log(nome, sobrenome, idade, profissao);