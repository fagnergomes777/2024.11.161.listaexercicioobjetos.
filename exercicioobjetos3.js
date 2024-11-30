// Crie um objeto chamado carro com as propriedades marca, modelo e ano.
// Adicione um método chamado descricao que retorna uma string no formato: "Este carro é um [marca] [modelo] do ano [ano]".
// Exiba o resultado do método no console.

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    
    descricao: function() {
      return `Este carro é um ${this.marca} ${this.modelo} do ano ${this.ano}`;
    }
  };
  
  console.log(carro.descricao());
  