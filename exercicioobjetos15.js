// Crie um objeto chamado jogador com as propriedades nome e pontuacao.
// Adicione um método chamado adicionarPontos que aumenta a pontuação do jogador em um valor especificado como parâmetro.
// Teste o método e exiba o resultado no console.

const jogador = {
    nome: "Carlos",
    pontuacao: 10,
  
    adicionarPontos(pontos) {
      this.pontuacao += pontos;
    }
  };
  
  jogador.adicionarPontos(50);
  jogador.adicionarPontos(100);
  
  console.log(jogador.pontuacao);
  