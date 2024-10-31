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
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Funções para navegação no carrossel
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projeto.fotos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projeto.fotos.length) % projeto.fotos.length
    );
  };

  return (
    <Base>
      <style>
        {`
          /* Estilo geral */
          body {
            font-family: Arial, sans-serif;
            color: #333;
          }

          /* Container principal do projeto */
          .projeto {
            max-width: 1000px;
            margin: 20px auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 12px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
          }

          /* Estilo para o título */
          .projeto h1 {
            font-size: 28px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 25px;
            color: #333;
          }

          /* Foto principal e detalhamento lado a lado */
          .foto-principal, .detalhes {
            width: 48%;
            display: inline-block;
            vertical-align: top;
            box-sizing: border-box;
          }

          /* Foto principal */
          .foto-principal img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
          }

          /* Detalhamento */
          .detalhes {
            padding: 15px;
            font-size: 16px;
            border-radius: 8px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
          }

          /* Informações do projeto */
          .informacoes {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 20px;
          }

          .integrantes, .data-inicio, .data-fim, .tecnologias, .ferramentas {
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
          }

          /* Informações menores */
          .informacoes-menores {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }

          /* Estilos específicos para o carrossel */
          .galeria {
            margin-top: 25px;
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 300px;
            border-radius: 8px;
          }

          .galeria .carrossel {
            display: flex;
            transition: transform 0.5s ease;
          }

          .galeria .carrossel img {
            min-width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
          }

          /* Botões de navegação do carrossel */
          .galeria .prev, .galeria .next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 10px;
            border: none;
            cursor: pointer;
            border-radius: 50%;
          }

          .galeria .prev {
            left: 15px;
          }

          .galeria .next {
            right: 15px;
          }

          /* Responsividade */
          @media (max-width: 768px) {
            .foto-principal, .detalhes {
              width: 100%;
              margin-bottom: 15px;
            }

            .informacoes-menores {
              flex-direction: column;
              gap: 15px;
            }
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
            <p><strong>Integrantes:</strong> {projeto.integrantes.join(", ")}</p>
          </div>

          <div className="informacoes-menores">
            <div className="data-inicio">
              <p><strong>Data de Início:</strong> {projeto.datainicio}</p>
            </div>
            <div className="data-fim">
              <p><strong>Data de Conclusão:</strong> {projeto.datafim}</p>
            </div>
            <div className="tecnologias">
              <p><strong>Tecnologias Usadas:</strong></p>
              <ul>
                {projeto.tecnologias.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="ferramentas">
              <p><strong>Ferramentas Usadas:</strong></p>
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
          <div className="carrossel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {projeto.fotos.map((foto, index) => (
              <img src={foto} alt={`Foto ${index + 1}`} key={index} />
            ))}
          </div>
          <button className="prev" onClick={handlePrev}>{"<"}</button>
          <button className="next" onClick={handleNext}>{">"}</button>
        </div>
      </div>
    </Base>
  );
};

export default ProjetoDetalhes;
