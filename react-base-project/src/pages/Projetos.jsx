import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
  const { page = "1" } = useParams(); // Captura o parâmetro da página, padrão é 1
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [currentPage, setCurrentPage] = useState(Number(page)); // Define o estado de currentPage usando page do useParams
  const itemsPerPage = 12;
  const navigate = useNavigate();

  useEffect(() => {
    // Atualiza currentPage sempre que o parâmetro page mudar
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    navigate(`/projetos/page/${pageNumber}`);
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
        <p>{page}</p>
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
