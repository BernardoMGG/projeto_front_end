import styled from "styled-components";

const Paginas = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    padding: 1rem;

    button {
        margin: 0 0.25rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        background-color: var(--detalhe); /* Cor de fundo para botões */
        color: white;
        cursor: pointer;
        transition: background-color 0.3s, box-shadow 0.3s;
    }

    button:hover:not(:disabled) {
        background-color: #333344; /* Cor ao passar o mouse */
    }

    button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    .active {
        background-color: #1b1b26;
        color: white;
        box-shadow: 0 0 0 2px #007bff; /* Contorno em azul ao redor do botão ativo */
    }

    .spacer {
        padding: 0.5rem 1rem;
        background: none;
        border: none;
        cursor: default;
    }
`;

export { Paginas };
