import React, { useState } from 'react';
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
  fotos
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % fotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + fotos.length) % fotos.length);
  };

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

          {/* Envolvendo integrantes, informações e galeria */}
          <div className="integrantes-informacoes-galeria">
            {/* Integrantes à esquerda */}
            <div className="esquerda">
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
            </div>

            {/* Informações e Carrossel à direita */}
            <div className="direita">
              <div className="informacoes">
                {/* Dados principais lado a lado */}
                <div className="data-inicio-conclusao">
                  <div className="info-bloco">
                    <p><strong>Data de Início: </strong> <br />{dataInicio}</p>
                  </div>
                  <div className="info-bloco">
                    <p><strong>Data de Conclusão:</strong> <br />{dataFim}</p>
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

              {/* Carrossel de Fotos Customizado */}
              <div className="galeria">
                <div className="carrossel-container">
                  <button className="carrossel-control prev" onClick={prevSlide}>❮</button>
                  <div className="carrossel-slide">
                    <img src={fotos[currentSlide]} alt={`Foto ${currentSlide + 1}`} />
                  </div>
                  <button className="carrossel-control next" onClick={nextSlide}>❯</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DetalhesCard;
