import { useEffect, useState } from "react";
import Base from "./Base";
import { getProjetos } from "../services/getprojetos";
import AtletaCard from "../components/AtletaCard/AtletaCard";
import ListContainer from "../components/ListContainer/ListContainer";
import { Link } from "react-router-dom";


const gerarSlug = (nome) => {
  return nome
    .toLowerCase() // Converte para minúsculas
    .replace(/ /g, "-") // Substitui espaços por hífens
    .replace(/[^\w-]+/g, ""); // Remove caracteres especiais
};

const Projetos = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const getDados = async () => {
      const dados = await getProjetos();

      if (dados.code === 400) {
        setErro(dados);
      } else {
        setData(dados.slice(0, 12));
      }

      setLoading(false);
    };
    getDados();
  }, []);

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

        {data &&
          data.map((projeto, index) => (
            <Link to={`/projeto/${gerarSlug(projeto.nomeProjeto)}`} key={index}> {/* Adiciona um Link em volta do card */}
              <AtletaCard
                nome={projeto.nomeProjeto}
                src={projeto.Fotodecapa}
                detalhamento={projeto.detalhamentoProjeto}
                integrantes={projeto.integrantes}
              />
            </Link>
          ))}
      </ListContainer>
    </Base>
  );
};

export default Projetos;
