import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase"; // Importação corrigida
import styled from "styled-components";

// Estilos...
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #001f3f; /* Azul escuro */
`;

const LoginBox = styled.div`
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

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem; /* Espaçamento abaixo do título */
  color:#002555;
`;

const Label = styled.label`
  align-self: flex-start; /* Alinha o rótulo à esquerda */
  margin-bottom: 0.5rem; /* Espaçamento abaixo do rótulo */
  color: #001f3f; /* Cor azul para o texto do rótulo */
`;

const Input = styled.input`
  width: 93%; /* Mantenha 100% para ajustar ao botão */
  padding: 0.8rem; /* Espaçamento interno em rem */
  margin: 0.5rem 0; /* Espaçamento vertical entre os inputs */
  border: 1px solid #ccc;
  border-radius: 5px; /* Arredondar bordas dos inputs */
`;

const Button = styled.button`
  width: 100%; /* Faz com que o botão use 100% da largura disponível */
  padding: 0.8rem; /* Espaçamento interno em rem */
  background-color: #001f3f; /* Azul escuro */
  color: white;
  border: none;
  border-radius: 5px; /* Arredondar bordas do botão */
  cursor: pointer;
  margin-top: 1em ;
  &:hover {
    background-color: #005f7f; /* Azul mais claro */
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <LoginBox>
        <Title>Login Administrador</Title>
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <Label>Usuário:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Label>Senha:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
        </form>
      </LoginBox>
    </Container>
  );
};

export default Login;
