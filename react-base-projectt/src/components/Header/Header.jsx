import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    {/* <Link to="/">Home</Link> */}
    {/* <Link to="/fotos">Fotos</Link> */}
    <Link to="/atletas">Projetos</Link>
    <Link to="/sobre-nos">Sobre Nós</Link>


    { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout" className="logout">Logout</Link>
    : console.log("adm logado")
    }

  </Top>
)

export default Header;