import styled from "styled-components";

const Card = styled.article`
  width: 100%;
  max-width: 22rem;
  padding: 0em 1em;
  position: relative;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;

  .notnome {
    background-color: var(--secundaria);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nome {
    font-size: 1rem;
    font-weight: bold;
    color: #161C2D;
    margin-right: auto;
    text-align: center;
  }

  .image-container {
    width: calc(100% - 2em);
    height: 200px; /* Altura fixa para a div */
    margin: 0.3em 0 1em 0em;
    position: relative;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .conteudo {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0.1em;
    width: 100%;
  }

  .detalhes {
    background-color: #161C2D;
    color: var(--secundaria);
    padding: .5em;
    display: flex;
    justify-content: center;
    flex-direction: column; /* Permite que o texto ocupe várias linhas */
    border-bottom-left-radius: 5px;
    max-height: 7rem; //só pra nao quebrar, esse foi na marra
  }

  .detalhes p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.2;
    text-align: left;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* Limita o número de linhas exibidas */
    -webkit-box-orient: vertical;
  }

  .direita {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #161C2D;
    color: #FFFFFF;
    padding: 0.5em;
    height: 7rem;
    border-bottom-right-radius: 5px;
  }

  .direita span {
    display: block;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  .integrantes-lista{
    height: 5rem;
    overflow-y: auto;

  }

    /* Estilização da barra de rolagem */
  .integrantes-lista::-webkit-scrollbar {
    width: 0.3rem;
  }

  .integrantes-lista::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3); /* Cor do fundo da barra de rolagem */
    border-radius: 10px; /* Bordas arredondadas do fundo */
  }

  .integrantes-lista::-webkit-scrollbar-thumb {
    background: #ffa500; /* Cor da parte que pode ser arrastada */
    border-radius: 10px; /* Bordas arredondadas da parte arrastável */
  }

  .integrantes-lista::-webkit-scrollbar-thumb:hover {
    background: #ff9000; /* Cor ao passar o mouse */
  }

  .vermais {
    margin-top: 0.5rem;
    font-size: 0.7rem;
    color: white;
    padding: 0.3rem 0.5rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    background-color: #ffa500;
  }

  .vermais:hover {
    background-color: #ff9000;
  }

  /* Media query para ajustar a imagem em telas menores */
  @media (max-width: 768px) {
    .image-container {
      height: 150px;
    }
  }

  @media (max-width: 480px) {
    .image-container {
      height: 100px;
    }
  }
`;

export { Card };
