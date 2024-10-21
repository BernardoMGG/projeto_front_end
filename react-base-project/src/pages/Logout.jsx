import { signOut } from "firebase/auth";
import { auth } from "../config/Firebase";
import Base from "./Base";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Estilos...
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #001f3f; /* Azul escuro */
`;

const LogoutBox = styled.div`
  background-color: white;
  padding: 2rem; /* Espaço interno */
  border-radius: 1rem; /* Arredondar bordas */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 90vw; /* Largura responsiva */
  max-width: 400px; /* Largura máxima para telas grandes */
  display: flex;
  flex-direction: column; /* Adiciona flex-direction para empilhar os elementos */
  align-items: center; /* Centraliza horizontalmente */
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem; /* Espaçamento abaixo do título */
`;

const Button = styled.button`
  width: 100%; /* Faz com que o botão use 100% da largura disponível */
  padding: 0.8rem; /* Espaçamento interno em rem */
  background-color: #001f3f; /* Azul escuro */
  color: white;
  border: none;
  border-radius: 5px; /* Arredondar bordas do botão */
  cursor: pointer;

  &:hover {
    background-color: #005f7f; /* Azul mais claro */
  }
`;

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth);
    window.sessionStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <Container>
      <LogoutBox>
        <Title>Logout</Title>
        <Button onClick={handleLogout}>Logout</Button>
      </LogoutBox>
    </Container>
  );
};

export default Logout;
