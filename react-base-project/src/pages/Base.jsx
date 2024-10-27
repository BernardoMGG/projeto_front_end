import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { getProjetos } from "../services/getprojetos"; // Importar a função para buscar os dados

const Base = (props) => {
  const [dadosProjetos, setDadosProjetos] = useState([]);

  useEffect(() => {
    const fetchProjetos = async () => {
      const response = await getProjetos();
      setDadosProjetos(response); // Supondo que a resposta seja um array de projetos
    };

    fetchProjetos();
  }, []);

  // Extraindo informações
  const tecnologiasUsadas = Array.from(new Set(dadosProjetos.flatMap(projeto => projeto.tecnologias)));
  const ferramentasUsadas = Array.from(new Set(dadosProjetos.flatMap(projeto => projeto.ferramentas)));
  const cursos = Array.from(new Set(dadosProjetos.map(projeto => projeto.Curso)));
  const periodos = Array.from(new Set(dadosProjetos.map(projeto => projeto.período)));
  const unidades = Array.from(new Set(dadosProjetos.map(projeto => projeto.unidade)));

  return (
    <>
      <Header
        tecnologiasUsadas={tecnologiasUsadas}
        ferramentasUsadas={ferramentasUsadas}
        cursos={cursos}
        periodos={periodos}
        unidades={unidades}
      />
      <div className="container">
        {props.children}
      </div>
    </>
  );
}

export default Base;
