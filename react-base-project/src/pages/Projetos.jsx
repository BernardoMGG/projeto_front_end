import { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import Base from "./Base";
import { getProjetos } from "../services/getprojetos";
import AtletaCard from "../components/ProjetoCard/ProjetoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import Paginacao from "../components/Pagination/Pagination";

const gerarSlug = (nome) => {
  return nome
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

const Projetos = () => {
  const { page = "1" } = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const itemsPerPage = 12;
  const navigate = useNavigate();

  const currentPage = Number(page);

  useEffect(() => {
    const getDados = async () => {
      const dados = await getProjetos();
      if (dados.code === 400) {
        setErro(dados);
      } else {
        setData(dados);
      }
      setLoading(false);
    };
    getDados();
  }, []);

  // Filtragem dos dados
  const filteredData = data.filter(projeto => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search") || "";
    const tecnologia = queryParams.get("tecnologia") || "";
    const ferramenta = queryParams.get("ferramenta") || "";
    const curso = queryParams.get("curso") || "";
    const periodo = queryParams.get("periodo") || "";
    const unidade = queryParams.get("unidade") || "";

    return (
      (!searchQuery || (projeto.Nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        projeto.detalhes.toLowerCase().includes(searchQuery.toLowerCase()) ||
        projeto.Curso.toLowerCase().includes(searchQuery.toLowerCase()) ||
        projeto.unidade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        projeto.período.toLowerCase().includes(searchQuery.toLowerCase()) ||
        projeto.datainicio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        projeto.datafim.toLowerCase().includes(searchQuery.toLowerCase()) ||
        projeto.integrantes.some(integrante => integrante.toLowerCase().includes(searchQuery.toLowerCase())) ||
        projeto.ferramentas.some(ferramenta => ferramenta.toLowerCase().includes(searchQuery.toLowerCase())) ||
        projeto.tecnologias.some(tecnolgia => tecnolgia.toLowerCase().includes(searchQuery.toLowerCase())) )
      )&&
      (!tecnologia || projeto.tecnologias.includes(tecnologia)) &&
      (!ferramenta || projeto.ferramentas.includes(ferramenta)) &&
      (!curso || projeto.Curso === curso) &&
      (!periodo || projeto.período === periodo) &&
      (!unidade || projeto.unidade === unidade)
    );
  });

  // Paginação dos dados filtrados
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    navigate(`/projetos/page/${pageNumber}?${location.search}`); // Mantém os filtros na URL
  };

  return (
    <Base currentPage={currentPage}>
      <ListContainer>
        {loading && <span>Carregando...</span>}
        {erro && (
          <div style={{ textAlign: "center" }}>
            <span>{`${erro.message}`}</span>
            <br />
            <span>{`Mensagem Original: ${erro.original}`}</span>
          </div>
        )}
        {currentItems.map((projeto, index) => (
          <Link to={`/projeto/${gerarSlug(projeto.Nome)}`} key={index} style={{ textDecoration: 'none' }}>
            <AtletaCard nome={projeto.Nome} src={projeto.Fotodecapa} detalhamento={projeto.detalhes} integrantes={projeto.integrantes} />
          </Link>
        ))}
      </ListContainer>
      <Paginacao
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Base>
  );
};

export default Projetos;
