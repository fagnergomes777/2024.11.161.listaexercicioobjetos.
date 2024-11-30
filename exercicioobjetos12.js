// Crie um objeto chamado estoque com produtos como propriedades,
// onde cada propriedade é um nome de produto e o valor é a quantidade em estoque.
// Escreva uma função que recebe o nome de um produto como parâmetro e verifica se ele está disponível no estoque.

const estoque = {
    "Camiseta": 10,
    "Calça": 5,
    "Tênis": 0
  };
  
  function verificarEstoque(produto) {
    if (estoque[produto] > 0) {
      console.log(`${produto} está disponível. Quantidade em estoque: ${estoque[produto]}`);
    } else {
      console.log(`${produto} não está disponível no estoque.`);
    }
  }
  
  verificarEstoque("Camiseta");
  verificarEstoque("Calça");
  verificarEstoque("Tênis");
  