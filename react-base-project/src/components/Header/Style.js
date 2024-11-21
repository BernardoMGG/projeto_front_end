import styled from "styled-components";

const Top = styled.header`
  padding: 0.5em 2em;
  background-color: var(--secundaria);
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  a {
    text-align: center;
    padding: 0.3em;
    margin: 0 0.7em;
    min-width: 5em;
    text-decoration: none;
    font-weight: bold;
    color: var(--detalhe);
    text-transform: uppercase;

    &:hover {
      text-decoration: underline;
    }
  }

  .logout {
    margin-left: auto;
  }

  input[type="text"] {
    padding-left: 0.5em;
    margin-left: 8rem;
    margin-right: 1em;
    border: 0.5px solid transparent;
    border-radius: 1rem;
    height: 1.6rem;
    width: 18rem;
    background-color: #e0e0e0;
    transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }

  input[type="text"]:focus {
    border: 1px solid #000;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  }

  #google_translate_element {
    margin-left: 20rem;
  }

  @media (max-width: 768px) {
    padding: 0.5em 1em;

    input[type="text"] {
      margin-left: 2rem;
      width: 12rem;
    }
  }

  @media (max-width: 960px) {
    flex-direction: column; /* Muda a direção para coluna */
    align-items: center; /* Centraliza os itens */
    padding: 1em;

    a {
      margin: 0.5em 0; /* Espaçamento entre os links */
      min-width: auto; /* Remove o mínimo de largura */
      flex: 1; /* Faz os links ocuparem o espaço */
      text-align: center; /* Centraliza o texto dos links */
    }

    input[type="text"] {
      margin-left: 0; /* Remove a margem à esquerda */
      width: 100%; /* Faz o campo de busca ocupar toda a largura */
      margin-bottom: 1em; /* Adiciona margem inferior */
    }
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;

  .esquerda {
    height: 100%;
    background-color: var(--destaque);
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 3em;
    color: #ffffff;
    font-weight: 500;
    font-size: 1.2em;
  }

  .filtro {
    position: relative;
    display: flex;
    background: var(--background-select);
    border-radius: 0.25rem;
    gap: 0.5em;
    padding: 1em;
  }

  .filtro select {
    width: 8em;
    padding: 0.5em 0 0.5em 0.5em;
    overflow: hidden;
    background: var(--destaque);
    color: white;
    border: 1px solid white;
    border-radius: 20px;
  }

  .placeholder {
    color: #ffa500;
  }

  .direita {
    height: 100%;
    background-color: #ffa500;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.3;
    padding-right: 1em;
  }

  .botaodireita {
    padding: 0.7em;
    border-radius: 15px;
    text-decoration: none;
    color: white;
    border: 1px solid white;
  }

  .botaodireita:hover {
    background-color: #d99a00;
  }

  @media (max-width: 1000px) {
    flex-direction: column; /* Altera a direção do flex */
    align-items: stretch; /* Alinha todos os itens à largura total */
    height: auto; /* Permite que a altura se ajuste ao conteúdo */

    .esquerda {
      padding: 1em; /* Ajusta o padding */
      font-size: 1em; /* Ajusta o tamanho da fonte */
      text-align: center; /* Centraliza o texto */
      justify-content: center; /* Centraliza os filtros */
      flex-direction: column; /* Coloca os filtros em coluna */
    }

    .filtro {
      flex-direction: column; /* Organiza os filtros verticalmente */
      padding: 0.5em; /* Ajusta o padding */
      margin: 0 auto; /* Centraliza os filtros */
      gap: 0.5em; /* Espaçamento entre os filtros */
      width: 100%; /* Faz os filtros ocuparem toda a largura */
    }

    .filtro select {
      width: 100%; /* Faz os selects ocuparem toda a largura */
    }

    .direita {
      width: 100%; /* Faz a direita ocupar 100% */
      padding: 1em; /* Ajusta o padding */
      text-align: center; /* Centraliza o conteúdo da direita */
    }

    .botaodireita {
      text-align: center; /* Centraliza o texto do botão */
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column; /* Altera a direção do flex */
    align-items: stretch; /* Alinha todos os itens à largura total */
    height: auto; /* Permite que a altura se ajuste ao conteúdo */
    .direita {
      width: 100%; /* Faz a direita ocupar 100% */
      padding: 1em; /* Ajusta o padding */
      text-align: center; /* Centraliza o conteúdo da direita */
    }
  }
`;

export { Top, BottomBar };
