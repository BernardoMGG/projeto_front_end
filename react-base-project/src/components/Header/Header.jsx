// Header.js
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Top, BottomBar } from "./Style";
import { useState } from "react";

const Header = ({ tecnologiasUsadas, ferramentasUsadas, cursos, periodos, unidades }) => {
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
    const accessToken = window.sessionStorage.getItem('accessToken');

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
        {window.sessionStorage.getItem('accessToken') ? (
          <Link to="/logout" className="logout">Logout</Link>
        ) : (
          console.log("adm logado")
        )}
      </Top>

      <BottomBar>
        <div className="esquerda">
          <span>{getPageTitle()}</span>
          {location.pathname.startsWith("/projetos") && (
            <div className="filtro">
              <select>
                <option value="" disabled selected hidden>Tecnologia ⮟</option>
                {tecnologiasUsadas.map((tec, index) => (
                  <option key={index} value={tec}>{tec}</option>
                ))}
              </select>

              <select>
                <option value="" disabled selected hidden>Ferramenta ⮟</option>
                {ferramentasUsadas.map((ferr, index) => (
                  <option key={index} value={ferr}>{ferr}</option>
                ))}
              </select>

              <select>
                <option value="" disabled selected hidden>Curso ⮟</option>
                {cursos.map((curso, index) => (
                  <option key={index} value={curso}>{curso}</option>
                ))}
              </select>

              <select>
                <option value="" disabled selected hidden>Período ⮟</option>
                {periodos.map((periodo, index) => (
                  <option key={index} value={periodo}>{periodo}</option>
                ))}
              </select>

              <select>
                <option value="" disabled selected hidden>Unidade ⮟</option>
                {unidades.map((unidade, index) => (
                  <option key={index} value={unidade}>{unidade}</option>
                ))}
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
};

export default Header;
