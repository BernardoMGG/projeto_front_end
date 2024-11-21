import styled from "styled-components";

const Card = styled.article`
  margin: 2rem 5rem;
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
    font-size: 2.5rem;
    color: #2e3b4e;
    font-weight: bold;
    margin-bottom: 1.2em;
  }

  .conteudo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .descricao-foto {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    margin-bottom: 2em;
  }

  .descricao {
    flex: 1;
    max-height: 500px;
    overflow-y: auto;
    padding-right: 1em;
  }

  .descricao p {
    font-size: 1.8rem;
    color: #444;
    line-height: 1.7;
    text-align: justify;
  }

  .foto-principal {
    flex: 1;
    max-width: 40%;
  }

  .foto-principal img {
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: cover;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  .integrantes-informacoes-galeria {
    display: flex;
    width: 100%; /* Garante que a galeria ocupe a largura total disponível */
    justify-content: space-between; /* Distribui o espaço igualmente entre os itens */
  }

  .esquerda {
    flex-basis: 30%;
  }

  .integrantes {
    flex-basis: 30%;
    min-width: 250px;
    margin-right: 3em;
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
    background-image: url("imagens/perfil.png");
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin-right: 15px;
  }

  .integrante span {
    font-weight: bold;
    color: #2e3b4e;
  }

  .direita {
    display: flex;
    flex-direction: column;
    width: calc(100% - 30% - 3em); /* Faz a largura da div direita ocupar o espaço restante */
  }

  .informacoes {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0em;
  }

  .data-inicio-conclusao {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0em;
  }

  .info-bloco {
    font-size: 1.1rem;
    color: #444;
    margin-bottom: 0em;
    width: 48%;
  }

  .info-bloco p {
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

  .galeria {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  }

  .carrossel-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 80%;
    overflow: hidden;
    justify-content: center;
  }

  .carrossel-slide img {
    width: auto;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .carrossel-control {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2rem;
    border: none;
    padding: 3rem 1rem;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }

  .carrossel-control.prev {
    margin-right: 45rem;
  }

  .carrossel-control.next {
    margin-left: 45rem;
  }

  .carrossel-control:hover {
    background-color: rgba(0, 0, 0, 0.7);
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
