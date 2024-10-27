// Header.js
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Top, BottomBar } from "./Style";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  let botaodireita = "";
  let linkbotaodireita = "";

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/projetos/page/1?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const getPageTitle = () => {
    const accessToken = window.sessionStorage.getItem('accessToken'); //Aproveitei pra verificar se é ADM aqui dentro dessa função logo

    if (location.pathname.startsWith("/projetos")) {
      botaodireita = accessToken ? "Adicionar Projeto" : "";
      linkbotaodireita = "adicionar-projeto";
      return "PROJETOS";
    } else if (location.pathname.startsWith("/projeto")) {
      botaodireita = accessToken ? "Editar Projeto" : "";
      linkbotaodireita = "editar-projeto";
      return "DETALHES DO PROJETO";
    } else if (location.pathname === "/sobre-nos") {
      botaodireita = "";
      return "SOBRE NÓS";
    } else {
      botaodireita = accessToken ? "Adicionar Projeto" : "";
      linkbotaodireita = "adicionar-projeto";
      return "PROJETOS";
    }
  };

  return (
    <>
      <Top>
        <a href="https://www.ibmec.br/">
          <img src="/imagens/logo.png" alt="ibmec" id="logo" width="auto" height="40px" />
        </a>
        <Link to="/projetos/page/1">Projetos</Link>
        <Link to="/sobre-nos">Sobre Nós</Link>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            id="busca"
            placeholder="Buscar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        {window.sessionStorage.getItem('accessToken')
          ? (<Link to="/logout" className="logout">Logout</Link> )
          : ( console.log("adm logado") )
        }
      </Top>

      <BottomBar>
        <div className="esquerda">
          <span>{getPageTitle()}</span>
          {location.pathname.startsWith("/projetos") && (
            <div className="filtro">
              <select>
                <option value="" disabled selected hidden>Tecnologia ⮟</option>
                <option value="tecnologia1">Tecnologia 1</option>
                <option value="tecnologia2">Tecnologia 2</option>
              </select>

              <select>
                <option value="" disabled selected hidden>Ferramenta ⮟</option>
                <option value="ferramenta1">Ferramenta 1</option>
                <option value="ferramenta2">Ferramenta 2</option>
              </select>

              <select>
                <option value="" disabled selected hidden>Curso ⮟</option>
                <option value="curso1">Curso 1</option>
                <option value="curso2">Curso 2</option>
              </select>

              <select>
                <option value="" disabled selected hidden>Período ⮟</option>
                <option value="periodo1">Período 1</option>
                <option value="periodo2">Período 2</option>
              </select>

              <select>
                <option value="" disabled selected hidden>Unidade ⮟</option>
                <option value="unidade1">Unidade 1</option>
                <option value="unidade2">Unidade 2</option>
              </select>
            </div>
          )}
        </div>
        <div className="direita">
          {botaodireita && <Link to={`/${linkbotaodireita}`} className="botaodireita">{botaodireita}</Link>}
        </div>
      </BottomBar>
    </>
  );
}

export default Header;
