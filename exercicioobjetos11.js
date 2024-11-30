// Crie um objeto chamado biblioteca que possui uma propriedade livros (um array de objetos).
// Cada objeto no array deve representar um livro, com as propriedades titulo e autor.
// Adicione um método ao objeto biblioteca chamado listarLivros que exibe o título e o autor de cada livro.

const biblioteca = {
    livros: [
      { titulo: "Nunca Desista dos Seus Sonhos", autor: "Augusto Cury" },
      { titulo: "O Evangelho Segundo Jesus Cristo", autor: "José Saramago" },
      { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" }
    ],
    listarLivros() {
      this.livros.forEach(livro => console.log(`${livro.titulo} - ${livro.autor}`));
    }
  };
  
  biblioteca.listarLivros();
  