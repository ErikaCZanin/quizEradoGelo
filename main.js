// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      pergunta: "Onde o Sid deve procurar primeiro?",
      respostas: [
        {
          opcao: "Dentro de uma caverna cheia de urros estranhos",
          correto: false
        },
        {
          opcao:
            "Perto do lago congelado onde ele gosta de brincar com peixinhos",
          correto: false
        },
        {
          opcao:
            "Perto do lago congelado onde ele gosta de brincar com peixinhos",
          correto: true
        }
      ]
    },
    {
      pergunta: "Sid encontra pegadas na neve. O que ele deve fazer?",
      respostas: [
        {
          opcao: "Ignorar e continuar gritando “bebêêêêêêê” por aí",
          correto: false
        },
        {
          opcao:
            "Seguir as pegadas cuidadosamente",
          correto: true
        },
        {
          opcao:
            "Escrever um bilhete na neve: “volta, bebê!”",
          correto: false
        }
      ]
    },
    {
      pergunta: "Sid encontra uma mochila do bebê presa no gelo. E agora?",
      respostas: [
        {
          opcao: "Usa um galho pra quebrar o gelo com cuidado",
          correto: true
        },
        {
          opcao:
            "Tenta lamber o gelo até derreter",
          correto: false
        },
        {
          opcao:
            "Finge que nada aconteceu e vai embora”",
          correto: true
        }
      ]
    }
  ];
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  const btnRetornar = document.querySelector(".btnReiniciar");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos = acertos + 1;
          acertos++; // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    btnRetornar.innerHTML = `Clique para reiniciar`;
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
    totalPerguntas = perguntas.length
  
  if(acertos == totalPerguntas) {
    alert("Você ajudou Sid a encontrar o bebê e não causou nenhuma catástrofe no caminho!")
  }
  else {
    alert("Você não encontrou o bebê! Tente por outro caminho.")
  }
  
  }
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();

  document.querySelectorAll('.btnReiniciar').forEach(item => {
    item.addEventListener('click', function () {
      indiceAtual = 0; // Reinicia o índice
      acertos = 0; // Zera os acertos
  
      conteudo.style.display = "flex"; // Mostra as perguntas
      conteudoFinal.style.display = "none"; // Esconde o final
  
      carregarPergunta(); // Recomeça o quiz
  
      console.log("Reiniciado jogo");
    });
  });
  

  document.querySelectorAll('.btnList').forEach(item => {
    item.addEventListener('click', function () {
      const navBar = document.querySelector('.navbar');
      const content = document.querySelector('.container');
      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
      const body = document.querySelector('body');
      const html = document.querySelector('html');
  
      content?.style.setProperty('transition', 'margin-top 0.5s ease');
        body?.style.setProperty('transition', 'height 0.5s ease');
        html?.style.setProperty('transition', 'height 0.5s ease');
        item?.style.setProperty('transition', 'width 0.5s ease');
  
      if (navBar) {
        if (navBar.style.height && navBar.style.height !== '0px') {
          navBar.style.height = '0px';
          item.style.width = '30%';
          body.style.height = '100%';
          html.style.height = '100%';
  
          // Remove a margem se for tela pequena
          if (isSmallScreen && content) {
            content.style.marginTop = '0px';
          }
        } else {
          navBar.style.height = navBar.scrollHeight + 'px';
  
          // Ajusta a largura de acordo com o tamanho da tela
          if (isSmallScreen) {
            item.style.width = '60%';
            content.style.marginTop = (navBar.scrollHeight + 90) + 'px';
            body.style.height = '115%'; 
            html.style.height = '115%';
          } else {
            item.style.width = '100%';
          }
        }
      }
    });
  });
  
  
  