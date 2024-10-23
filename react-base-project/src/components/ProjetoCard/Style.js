import styled from "styled-components";

const Card = styled.article`
  width: 20rem;
  background-color: var(--secundaria);
  padding: 1em;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .nome {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--destaque);
    margin-bottom: 1em;
    text-align: center;
  }

  figure {
    margin: 0;
    width: 100%;
    height: auto;
    position: relative;
  }

  img {
    object-fit: cover;
    width: 100%;
    border-radius: 8px;
  }

  .detalhes {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-top: 1em;
    background-color: var(--detalhe);
    color: var(--secundaria);
    padding: 1em;
    border-radius: 8px;
    flex-direction: column;
  }

  .detalhes p {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .integrantes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
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
    margin-top: 1em;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .botao button {
    background-color: #ffa500;
    color: white;
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
  }

  .botao button:hover {
    background-color: #ff9000;
  }
`;

export { Card };
