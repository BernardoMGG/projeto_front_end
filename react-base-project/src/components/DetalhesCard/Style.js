import styled from "styled-components";

const Card = styled.article`
  margin: 4em;
  padding: 2em;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;



  .header {
    text-align: center;
    margin-bottom: 2em;
  }

  .header h1 {
    font-size: 3rem;
    color: #2e3b4e; /* Cor consistente com o resto do site */
    font-weight: bold;
    margin-bottom: 1.2em;
  }

  .conteudo {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .descricao-foto {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2em;
  }

  .descricao {
    flex: 1;
    padding-right: 2em;
  }

  .descricao p {
    font-size: 1.2rem;
    color: #444;
    line-height: 1.7;
    text-align: justify;
  }

  .foto-principal {
    flex: 1;
  }

  .foto-principal img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  .integrantes {
    width: 300px;
    margin-right: 3em;
    margin-bottom: 2em;
  }

  .integrantes h3 {
    font-size: 2rem;
    color: #2e3b4e;
    font-weight: 700;
    margin-bottom: 1.5em;
  }

  .lista-integrantes {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  .integrante {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    color: #333;
  }

  .integrante .avatar {
    width: 60px;
    height: 60px;
    background-image: url("/imagens/perfil.png");
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin-right: 15px;
  }

  .integrante span {
    font-weight: bold;
    color: #2e3b4e;
  }

  .informacoes {
    flex: 2;
  }

  .data-inicio-conclusao {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
  }

  .info-bloco {
    font-size: 1.1rem;
    color: #444;
    margin-bottom: 1.5em;
    width: 48%;
  }

  .info-bloco p {
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  .info-bloco ul {
    list-style: none;
    padding: 0;
  }

  .info-bloco ul li {
    font-size: 1.1rem;
    color: #555;
  }

  .tecnologias-ferramentas {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
  }

  /* Carrossel de fotos */
  .galeria {
    position: relative;
    overflow: hidden;
    margin-top: 3em;
    border-radius: 12px; /* Borda mais suave */
    background-color: transparent; /* Removendo fundo sólido */
    padding: 0 20px; /* Pequeno espaçamento lateral para manter o carrossel leve */
  }

  .galeria h3 {
    font-size: 1.6rem;
    font-weight: bold;
    color: #2e3b4e; /* Cor do título consistente com o site */
    text-align: center;
    margin-bottom: 1.5em;
  }

  .carrossel {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carrossel img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 8px; /* Bordas mais arredondadas */
  }

  /* Botões de navegação (prev e next) */
  .prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.3); /* Cor mais suave para os botões */
    color: #fff;
    padding: 15px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    z-index: 10;
    transition: background-color 0.3s ease;
  }

  .prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.5); /* Efeito de hover mais suave */
  }

  .prev:focus, .next:focus {
    outline: none; /* Retirando o contorno laranja */
  }

  .prev {
    left: 15px;
  }

  .next {
    right: 15px;
  }

  /* Indicadores de navegação (dots) */
  .indicadores {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }

  .indicador {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6); /* Indicadores com opacidade suave */
    transition: background-color 0.3s ease;
    cursor: pointer;
  }

  .indicador.active {
    background-color: #f4a261; /* Cor ativa do indicador */
  }

  @media (max-width: 768px) {
    .conteudo {
      flex-direction: column;
    }

    .foto-principal {
      margin-bottom: 1.5em;
    }

    .integrantes {
      width: 100%;
      margin-right: 0;
    }

    .carrossel img {
      height: 250px;
    }

    .data-inicio-conclusao {
      flex-direction: column;
      margin-bottom: 2em;
    }

    .info-bloco {
      width: 100%;
      margin-bottom: 1em;
    }

    .tecnologias-ferramentas {
      flex-direction: column;
    }
  }

  @media (max-width: 480px) {
    .carrossel img {
      height: 200px;
    }
  }
`;

export { Card };
