import React from "react";
import styled from "styled-components";
import Base from "./Base";

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

const Container = styled.div`
  padding: 2rem 0;
  background-color: #f8f8f8;
  min-height: 100vh;
  position: relative;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 100px; /* Ajuste para posicionar a linha abaixo do título */
  bottom: 0;
  left: 50%;
  width: 2px;
  background-color: #ccc;
  transform: translateX(-50%);
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  max-height: 400px;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  filter: brightness(0.7);
`;

const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const MemberCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  width: 45%;
  justify-content: ${(props) => (props.alinhamento === "esquerda" ? "flex-start" : "flex-end")};
  margin-left: ${(props) => (props.alinhamento === "direita" ? "72rem" : "0")};
  margin-right: ${(props) => (props.alinhamento === "esquerda" ? "auto" : "0")};
  padding-left: ${(props) => (props.alinhamento === "esquerda" ? "2rem" : "0")};
  padding-right: ${(props) => (props.alinhamento === "direita" ? "2rem" : "0")};
  flex-direction: ${(props) => (props.alinhamento === "esquerda" ? "row" : "row-reverse")};

  @media (max-width: 768px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: center;
  }
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: ${(props) => (props.alinhamento === "esquerda" ? "1.5rem" : "0")};
  margin-left: ${(props) => (props.alinhamento === "direita" ? "1.5rem" : "0")};

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const MemberDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Nome = styled.h3`
  font-size: 1.6rem;
  margin: 0;
  color: #2a5dab;
`;

const Info = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin: 0.4rem 0;
`;

const SobreNos = () => (
  <Base>
    <BannerContainer>
      <BannerImage src="/imagens/image2.png" alt="Banner Sobre Nós" />
    </BannerContainer>
    <Container>
      <VerticalLine />
      <TeamSection>
        {membros.map((membro, index) => (
          <MemberCard key={index} alinhamento={index % 2 === 0 ? "esquerda" : "direita"}>
            <MemberImage src={membro.imagem} alt={membro.nome} alinhamento={index % 2 === 0 ? "esquerda" : "direita"} />
            <MemberDetails>
              <Nome>{membro.nome}</Nome>
              <Info>Curso: {membro.curso}</Info>
              <Info>Unidade: {membro.unidade}</Info>
              <Info>Vínculo: {membro.vinculo}</Info>
            </MemberDetails>
          </MemberCard>
        ))}
      </TeamSection>
    </Container>
  </Base>
);

export default SobreNos;
