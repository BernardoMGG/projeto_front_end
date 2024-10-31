import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjetos } from "../services/getprojetos";
import Base from "./Base";

const gerarSlug = (nome) => {
  return nome
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

const ProjetoDetalhes = () => {
  const { slug } = useParams();
  const [projeto, setProjeto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchProjeto = async () => {
      const dados = await getProjetos();

      if (dados.code === 400) {
        setErro(dados);
      } else {
        const projetoSelecionado = dados.find(proj => gerarSlug(proj.Nome) === slug);
        setProjeto(projetoSelecionado);
      }

      setLoading(false);
    };
    fetchProjeto();
  }, [slug]);

  if (loading) {
    return <span>Carregando...</span>;
  }

  if (erro) {
    return (
      <div style={{ textAlign: "center" }}>
        <span>{`${erro.message}`}</span>
        <br />
        <span>{`Mensagem Original: ${erro.original}`}</span>
      </div>
    );
  }

  if (!projeto) {
    return <span>Projeto não encontrado</span>;
  }

  return (
    <Base>
      <style>
        {`
          /* Estilos para o container principal do projeto */
          .projeto {
            max-width: 900px;
            margin: 0 auto;
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }

          /* Estilo para o título */
          .projeto h1 {
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
          }

          /* Estilos para a foto e o detalhamento, lado a lado */
          .foto-principal, .detalhes {
            width: 48%;
            height: 100%;
            display: inline-block;
            vertical-align: top;
            box-sizing: border-box;
          }

          /* Estilos específicos para a foto-principal */
          .foto-principal img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
            object-fit: cover;
          }

          /* Estilos específicos para o detalhamento */
          .detalhes {
            background-color: #ffffff;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            font-size: 16px;
            overflow: hidden;
          }


          .informacoes {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .integrantes, .data-inicio, .data-fim, .tecnologias, .ferramentas {
            background-color: #ffffff;
            padding: 10px 15px;
            border-radius: 8px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          }

          .integrantes p, .data-inicio p, .data-fim p, .tecnologias p, .ferramentas p {
            font-weight: bold;
            margin-bottom: 10px;
          }

          .informacoes-menores {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }

          .informacoes-menores div {
            flex: 1 1 45%;
          }

          .galeria {
            margin-top: 20px;
          }

          .galeria h3 {
            font-size: 20px;
            margin-bottom: 10px;
          }

          .galeria .foto {
            display: inline-block;
            width: 100px;
            height: 100px;
            margin-right: 10px;
            border-radius: 8px;
            overflow: hidden;
            background-color: #f0f0f0;
          }

          .galeria .foto img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>

      <div className="projeto">
        <h1>{projeto.Nome}</h1>
        <div className="foto-principal">
          <img src={projeto.Fotodecapa} alt={`Capa do projeto ${projeto.Nome}`} />
        </div>
        <div className="detalhes">
          <p>Detalhamento: {projeto.detalhes}</p>
        </div>

        <div className="informacoes">
          <div className="integrantes">
            <p>Integrantes:</p> {projeto.integrantes.join(", ")}
          </div>

          <div className="informacoes-menores">
            <div className="data-inicio">
              <p>Data de Início: {projeto.datainicio}</p>
            </div>
            <div className="data-fim">
              <p>Data de Conclusão: {projeto.datafim}</p>
            </div>
            <div className="tecnologias">
              <p>Tecnologias Usadas:</p>
              <ul>
                {projeto.tecnologias.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="ferramentas">
              <p>Ferramentas Usadas:</p>
              <ul>
                {projeto.ferramentas.map((tools, index) => (
                  <li key={index}>{tools}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="galeria">
          <h3>Outras Fotos:</h3>
          {projeto.fotos.map((foto, index) => (
            <div className="foto" key={index}>
              <img src={foto} alt={`Foto ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
};

export default ProjetoDetalhes;
