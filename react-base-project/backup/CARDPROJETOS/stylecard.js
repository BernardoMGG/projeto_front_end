import styled from "styled-components";

const Card = styled.article`
  width: 15rem;
  height: 20rem; /* Definindo um tamanho fixo */
  background-color: var(--secundaria);
  padding: 1em;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em;

  .nome {
    font-size: 1rem;
    font-weight: bold;
    color: var(--destaque);
    text-align: center;
    height: 3rem;
  }


  figure { /* Imagem do Projeto */
    margin: 0;
    width: 100%;
    height: 12rem; /* Altura fixa para as imagens */
    position: relative;
  }

  img { /* Imagem de Perfil */
    object-fit: cover;
    width: 100%;
    height: 100%; /* Garante que a imagem preencha o espaço definido */
    border-radius: 8px;
  }

  .detalhes {
    width: 100%;
    margin-top: 0.5em;
    background-color: var(--detalhe);
    color: var(--secundaria);
    padding: 1em;
    border-radius: 8px;
    text-align: left;
    height: 6rem; /* Altura fixa para os detalhes */
  }

  .detalhes p {
    font-size: 0.5rem;
    line-height: 1.4;
    margin: 0.2em 0;
  }

  .integrantes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5em;
    width: 100%;

  }

  .integrantes span {
    display: block;
    font-size: 0.8rem;
  }

  .integrantes img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-left: 0.5rem;
  }

  .botao {
    margin-top: auto; /* Mantém o botão no final do card */
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .botao button {
    background-color: #ffa500;
    color: white;
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    width: 100%; /* Garante que o botão ocupe toda a largura */
  }

  .botao button:hover {
    background-color: #ff9000;
  }
`;

export { Card };
