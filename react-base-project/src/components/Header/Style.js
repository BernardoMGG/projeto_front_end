import styled from "styled-components"

const Top = styled.header`
  padding: .5em 2em;
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
    padding: .3em;
    margin: 0 .7em;
    min-width: 5em;
    text-decoration: none;
    font-weight: bold;
    color: var(--detalhe);
    text-transform: uppercase;
    /*border-radius: .3em;*/
    &:hover{
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
    width: 14rem;
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
`

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

  .direita {
    height: 100%;
    background-color: #ffa500;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.3;
    padding-right: 1em;
  }

  .filtro {
    display: flex;
    gap: 1em;
    margin-left: 2em;
  }

  .filtro select {
    word-spacing: 0.5em;
    padding: 0.3em 1em;
    border-radius: 1.5em;
    border: 1px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
    font-weight: bold;
    font-size: 0.9em;
    appearance: none;
    outline: none;
    cursor: pointer;
    position: relative;
  }

  .seta{
    background-color: red;
    margin-left: 1em;
  }

  .filtro select option {
    color: #000000;
  }


  .botaodireita{
    padding: 0.7em;
    border-radius: 15px;
    text-decoration: none;
    color: white;
    border: 1px solid white ;

}

  .botaodireita:hover {
    background-color: #d99a00;
  }
`;

export { Top, BottomBar };
