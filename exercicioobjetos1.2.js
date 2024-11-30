// Crie um objeto chamado livro com as propriedades titulo, autor e paginas.
// Em seguida, exiba cada propriedade no console usando a notação de ponto e a notação de colchetes.
// Adicione uma nova propriedade chamada editora ao objeto livro criado na questão anterior.
// Modifique o valor da propriedade titulo e remova a propriedade autor. Exiba o objeto atualizado no console.

let livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  paginas: 1216
};

console.log(livro.titulo);
console.log(livro.autor);
console.log(livro.paginas);

console.log(livro["titulo"]);
console.log(livro["autor"]);
console.log(livro["paginas"]);

livro.editora = "HarperCollins";

livro.titulo = "As Crônicas de Nárnia";

delete livro.autor;

console.log(livro);
