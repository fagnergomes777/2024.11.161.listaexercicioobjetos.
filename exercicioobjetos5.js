// Crie dois objetos chamados usuario1 e usuario2 com as propriedades nome e idade.
// Combine os dois objetos em um único objeto chamado usuarios, utilizando o spread operator.
// Exiba o objeto resultante no console.

const usuario1 = {
    nome: "Fagner",
    idade: 38
  };
  
  const usuario2 = {
    nome: "Gomes",
    idade: 39
  };
  
  const usuarios = {
    ...usuario1,
    ...usuario2
  };
  
  console.log(usuarios);
  