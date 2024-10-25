import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => {

  const handleProjectsClick = () => {
    localStorage.setItem('currentPage', 1);
    // window.location.reload();
  };

  return (
  <Top>
    <a href="https://www.ibmec.br/">
      <img src="/imagens/logo.png" alt="ibmec" id="logo" width="auto" height="40px"/>
    </a>
    <Link to="/projetos" onClick={handleProjectsClick}>Projetos</Link>
    <Link to="/sobre-nos">Sobre Nós</Link>
    <input type="text" id="busca" placeholder="Buscar" />
    <div id="google_translate_element"></div>
    {window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout" className="logout">Logout</Link>
    : console.log("adm logado")
    }
  </Top>
  );
}

export default Header;