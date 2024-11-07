// src/components/DetalhesCard/DetalhesCard.jsx
import React from 'react';
import { Card } from "./Style.js";

const DetalhesCard = ({
  nome,
  src,
  detalhamento,
  integrantes,
  dataInicio,
  dataFim,
  tecnologias,
  ferramentas,
  fotos,
  currentIndex,
  handleNext,
  handlePrev
}) => {
  return (
    <Card>
      <div className="projeto">
        {/* Nome do projeto */}
        <header className="header">
          <h1>{nome}</h1>
        </header>

        {/* Layout da foto e descrição */}
        <div className="conteudo">
          {/* Descrição e Foto */}
          <div className="descricao-foto">
            <div className="descricao">
              <p>{detalhamento}</p>
            </div>
            <div className="foto-principal">
              <img src={src} alt={`Capa do projeto ${nome}`} />
            </div>
          </div>

          {/* Integrantes à esquerda */}
          <div className="integrantes">
            <h3>Integrantes</h3>
            <div className="lista-integrantes">
              {integrantes.map((integrante, index) => (
                <div className="integrante" key={index}>
                  <div className="avatar"></div>
                  <span>{integrante}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Informações à direita dos integrantes */}
          <div className="informacoes">
            {/* Dados principais lado a lado */}
            <div className="data-inicio-conclusao">
              <div className="info-bloco">
                <p>Data de Início: <br /> {dataInicio}</p>
              </div>
              <div className="info-bloco">
                <p>Data de Conclusão: <br /> {dataFim}</p>
              </div>
            </div>

            {/* Tecnologias e Ferramentas lado a lado */}
            <div className="tecnologias-ferramentas">
              <div className="info-bloco">
                <p><strong>Tecnologias Usadas:</strong></p>
                <ul>
                  {tecnologias.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="info-bloco">
                <p><strong>Ferramentas Usadas:</strong></p>
                <ul>
                  {ferramentas.map((tools, index) => (
                    <li key={index}>{tools}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Carrossel de Fotos */}
          <div className="galeria">
              <h3>Outras Fotos</h3>
              <div className="carrossel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {fotos.map((foto, index) => (
                  <img src={foto} alt={`Foto ${index + 1}`} key={index} />
                ))}
              </div>
              <button className="prev" onClick={handlePrev}>{"<"}</button>
              <button className="next" onClick={handleNext}>{">"}</button>
            </div>
        </div>
      </div>
    </Card>
  );
};

export default DetalhesCard;
