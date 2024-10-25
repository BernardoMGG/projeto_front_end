import { useEffect, useState } from "react";
import Base from "./Base";
import { getProjetos } from "../services/getprojetos";
import AtletaCard from "../components/ProjetoCard/ProjetoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import { Link } from "react-router-dom";

const gerarSlug = (nome) => {
  return nome
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

const Projetos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    () => Number(localStorage.getItem('currentPage')) || 1
    );
  const itemsPerPage = 12;

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

  // Cálculo de dados para a página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Número total de páginas
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    localStorage.setItem('currentPage', pageNumber);
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
      </ListContainer>

      {/* Paginação */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </Base>
  );
};

export default Projetos;
