import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjetos } from "../services/getprojetos";
import Base from "./Base";
import styled from "styled-components";

// Estilização
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background-color: #f4f4f4;
`;

const ProjectBox = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 90vw;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  color: #002555;
  margin-bottom: 1.5rem;
`;

const InfoBox = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
  width: 100%;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    border-radius: 10px;
  }
`;

const Participants = styled.p`
  margin: 1rem 0;
`;

const TechnologyList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const PhotoGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const PhotoItem = styled.div`
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

// Função para gerar o slug do nome do projeto
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
      <Container>
        <ProjectBox>
          <Title>{projeto.Nome}</Title>
          <ImageBox>
            <img src={projeto.Fotodecapa} alt={`Capa do projeto ${projeto.Nome}`} />
          </ImageBox>
          <InfoBox>
            <Participants>
              <strong>Integrantes:</strong> {projeto.integrantes.join(", ")}
            </Participants>
            <p><strong>Detalhamento:</strong> {projeto.detalhes}</p>
            <p><strong>Tecnologias Usadas:</strong></p>
            <TechnologyList>
              {projeto.tecnologias.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </TechnologyList>
          </InfoBox>
          <h3>Outras Fotos:</h3>
          <PhotoGallery>
            {projeto.fotos.map((foto, index) => (
              <PhotoItem key={index}>
                <img src={foto} alt={`Foto ${index + 1}`} />
              </PhotoItem>
            ))}
            
          </PhotoGallery>
        </ProjectBox>
      </Container>
    </Base>
  );
};

export default ProjetoDetalhes;
