// Crie um objeto chamado filme com as propriedades titulo, diretor e ano.
// Adicione uma propriedade chamada atores contendo um array com nomes de atores.
// Adicione um método chamado descricaoCompleta que retorna uma string descrevendo o filme,
// incluindo o título, diretor, ano e atores.

const filme = {
    titulo: "Inception",
    diretor: "Christopher Nolan",
    ano: 2010,
    atores: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
  
    descricaoCompleta() {
      return `${this.titulo} (${this.ano}), dirigido por ${this.diretor}, com os atores: ${this.atores.join(", ")}.`;
    }
  };
  
  console.log(filme.descricaoCompleta());
  