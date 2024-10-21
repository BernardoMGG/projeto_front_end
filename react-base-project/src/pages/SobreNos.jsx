import React from "react";
import styled from "styled-components";
import Base from "./Base";

// Dados para os membros da equipe
const membros = [
  {
    nome: "A preencher",
    curso: "A preencher",
    unidade: "A preencher",
    vinculo: "A preencher",
    imagem: "url_da_imagem_1", // Insira a URL da imagem aqui
  },
  {
    nome: "A preencher",
    curso: "A preencher",
    unidade: "A preencher",
    vinculo: "A preencher",
    imagem: "url_da_imagem_2", // Insira a URL da imagem aqui
  },
  {
    nome: "A preencher",
    curso: "A preencher",
    unidade: "A preencher",
    vinculo: "A preencher",
    imagem: "url_da_imagem_3", // Insira a URL da imagem aqui
  },
  {
    nome: "A preencher",
    curso: "A preencher",
    unidade: "A preencher",
    vinculo: "A preencher",
    imagem: "url_da_imagem_4", // Insira a URL da imagem aqui
  },
  {
    nome: "A preencher",
    curso: "A preencher",
    unidade: "A preencher",
    vinculo: "A preencher",
    imagem: "url_da_imagem_5", // Insira a URL da imagem aqui
  },
];

// Estilo do Container
const Container = styled.div`
  padding: 2rem; /* Espaçamento interno */
  background-color: #f8f8f8; /* Cor de fundo suave */
  min-height: 100vh; /* Garante que o fundo cubra toda a altura da página */
`;

// Estilo para a seção da equipe
const TeamSection = styled.div`
  display: flex;
  justify-content: space-around; /* Espaçamento entre os cartões */
  align-items: flex-start; /* Alinha os cartões ao topo */
  flex-wrap: nowrap; /* Mantém todos os cartões na mesma fileira */
  margin-top: 2rem; /* Espaçamento acima da seção */
`;

// Estilo do Cartão
const MemberCard = styled.div`
  background-color: white; /* Cor de fundo do cartão */
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra */
  width: 150px; /* Largura do cartão */
  margin: 1rem; /* Margem entre os cartões */
  padding: 1rem; /* Espaçamento interno */
  text-align: center; /* Centraliza o texto */
`;

const MemberImage = styled.img`
  width: 100%; /* Faz a imagem ocupar a largura do cartão */
  border-radius: 10px; /* Bordas arredondadas para a imagem */
`;

const Nome = styled.h3`
  margin: 0.5rem 0; /* Espaçamento acima e abaixo do nome */
`;

const Info = styled.p`
  margin: 0; /* Remove margem padrão */
  font-size: 0.9rem; /* Tamanho da fonte da informação */
  color: #555; /* Cor do texto da informação */
`;

const SobreNos = () => (
  <Base>
    <Container>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Sobre Nós</h1>
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
