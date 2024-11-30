// Crie um objeto chamado agenda que armazena informações sobre uma pessoa: nome, telefone e email.
// Crie uma função fora do objeto que receba este objeto como parâmetro e
// exiba uma mensagem formatada com todas as informações da pessoa.

const agenda = {
    nome: "Fagner",
    telefone: "1234-5678",
    email: "fagner@example.com"
  };
  
  function exibirInformacoes(pessoa) {
    console.log(`${pessoa.nome}, ${pessoa.telefone}, ${pessoa.email}`);
  }
  
  exibirInformacoes(agenda);
  