import Cartao from "../components/Cartao/Cartao";
import Base from "./Base";
import ListContainer from "../components/ListContainer/ListContainer";


const dados = [
    {
        titulo: "Aluno 1",
        texto: "Informações do Aluno 1"
    },
    {
        titulo: "Aluno 2",
        texto: "Informações do aluno 2"
    },
    {
        titulo: "Aluno 3",
        texto: "Informações do Aluno 3"
    },
    {
        titulo: "Aluno 4",
        texto: "Informações do aluno 4"
    },
    {
        titulo: "Aluno 5",
        texto: "Informações do aluno 5"
    }

]

const SobreNos = () => (
    <Base>
        <ListContainer>
            {
                dados.map( (ele, i) => (
                    <Cartao
                        key = {i}
                        titulo = {ele.titulo}
                        texto = {ele.texto}
                    />
                ))
            }

        </ListContainer>
    </Base>
);

export default SobreNos;