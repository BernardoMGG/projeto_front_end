// src/pages/ProjetoDetalhes.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjetos } from "../services/getprojetos";
import Base from "./Base";
import DetalhesCard from "../components/DetalhesCard/DetalhesCard";

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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projeto.fotos.length) % projeto.fotos.length);
  };

  return (
    <Base>
      <DetalhesCard
        nome={projeto.Nome}
        src={projeto.Fotodecapa}
        detalhamento={projeto.detalhes}
        integrantes={projeto.integrantes}
        dataInicio={projeto.datainicio}
        dataFim={projeto.datafim}
        tecnologias={projeto.tecnologias}
        ferramentas={projeto.ferramentas}
        fotos={projeto.fotos}
        currentIndex={currentIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </Base>
  );
};

export default ProjetoDetalhes;
