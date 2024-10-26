import { Link, useNavigate } from "react-router-dom";
import { Top } from "./Style";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/projetos/page/1?search=${encodeURIComponent(searchQuery)}`); // Ajuste para a rota de busca
    }
  };

  return (
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
      {/* <div id="google_translate_element"></div> */}
      {window.sessionStorage.getItem('accessToken') ? (
        <Link to="/logout" className="logout">Logout</Link>
      ) : (
        console.log("adm logado")
      )}
    </Top>
  );
}

export default Header;
