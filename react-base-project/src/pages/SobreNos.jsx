import React from "react";
import styled from "styled-components";
import Base from "./Base";

// Dados para os membros da equipe
const membros = [
  {
    nome: "João Pedro Abdu",
    curso: "Análise e Desenvolvimento de Sistemas",
    unidade: "Barra",
    vinculo: "Estudante",
    imagem: "/imagens/user.png"
  },
  {
    nome: "Bernardo Gonçalves",
    curso: "Engenharia de Software",
    unidade: "Barra",
    vinculo: "Estudante",
    imagem: "/imagens/user.png"
  },
  {
    nome: "Bryan Amorim",
    curso: "Ciência de Dados",
    unidade: "Barra",
    vinculo: "Estudante",
    imagem: "/imagens/user.png"
  },
  {
    nome: "Lucca Barcelos",
    curso: "Engenharia de Software",
    unidade: "Barra",
    vinculo: "Estudante",
    imagem: "/imagens/user.png"
  },
  {
    nome: "Gustavo Salvador",
    curso: "Ciência de Dados",
    unidade: "Barra",
    vinculo: "Estudante",
    imagem: "/imagens/user.png"
  },
];

// Estilo do Container
const Container = styled.div`
  padding: 2rem;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

// Estilo do Título
const Titulo = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: #2a5dab;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

// Estilo para a seção da equipe
const TeamSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
`;

// Estilo do Cartão
const MemberCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 300px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

// Estilo da Imagem do Membro
const MemberImage = styled.img`
  width: 120px; /* Aumenta a largura */
  height: 120px; /* Aumenta a altura */
  object-fit: cover; /* Mantém a proporção sem esticar */
  border-radius: 50%; /* Deixa a imagem circular */
  margin-bottom: 1rem;
`;

// Estilo do Nome
const Nome = styled.h3`
  font-size: 1.1rem;
  margin: 0.5rem 0;
  color: #2a5dab;
`;

// Estilo da Informação
const Info = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #555;
`;

const SobreNos = () => (
  <Base>
    <Container>
      <Titulo>Sobre Nós</Titulo>
      <div style={{ position: "relative", width: "100vw", left: "50%", transform: "translateX(-50%)" }}><img src="/imagens/image2.png" alt="Banner Sobre Nós" style={{ width: "100vw", height: "auto", maxHeight: "400px", objectFit: "cover", margin: "0", padding: "0" }} /></div>
      <TeamSection>
        {membros.map((membro, index) => (
          <MemberCard key={index}>
            <MemberImage src={membro.imagem} alt={membro.nome} />
            <Nome>{membro.nome}</Nome>
            <Info>Curso: {membro.curso}</Info>
            <Info>Unidade: {membro.unidade}</Info>
            <Info>Vínculo: {membro.vinculo}</Info>
          </MemberCard>
        ))}
      </TeamSection>
    </Container>
  </Base>
);

export default SobreNos;
