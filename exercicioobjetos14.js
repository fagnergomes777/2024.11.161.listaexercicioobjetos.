// Crie um objeto chamado pedido com as propriedades numeroPedido,
// cliente e itens (um array de objetos, onde cada objeto representa um item com nome e quantidade).
// Adicione um método chamado resumoPedido que retorna o número do pedido e o nome de todos os itens.

const pedido = {
    numeroPedido: 12345,
    cliente: "Fagner Gomes",
    itens: [
      { nome: "Camiseta", quantidade: 1 },
      { nome: "Calça", quantidade: 2 },
      { nome: "Tênis", quantidade: 3 }
    ],
  
    resumoPedido() {
      return `Pedido nº ${this.numeroPedido} - Itens: ${this.itens.map(item => item.nome).join(", ")}`;
    }
  };
  
  console.log(pedido.resumoPedido());
  