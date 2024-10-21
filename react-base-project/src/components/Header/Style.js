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

export {Top}