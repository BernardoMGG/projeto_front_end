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
  const { page = "1" } = useParams(); // Captura apenas a página
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [currentPage, setCurrentPage] = useState(Number(page));
  const itemsPerPage = 12;
  const navigate = useNavigate();

  // Extrai a query da URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  useEffect(() => {
    setCurrentPage(Number(page));
  }, [page]);

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

  const filteredData = searchQuery
    ? data.filter(projeto => projeto.nomeProjeto.toLowerCase().includes(searchQuery.toLowerCase()))
    : data;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    navigate(`/projetos/page/${pageNumber}?search=${encodeURIComponent(searchQuery)}`); // Mantém a query na URL
  };

  return (
    <Base>
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
          <Link to={`/projeto/${gerarSlug(projeto.nomeProjeto)}`} key={index} style={{ textDecoration: 'none' }}>
            <AtletaCard
              nome={projeto.nomeProjeto}
              src={projeto.Fotodecapa}
              detalhamento={projeto.detalhamentoProjeto}
              integrantes={projeto.integrantes}
            />
          </Link>
        ))}
        <p>{currentPage}</p>
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
