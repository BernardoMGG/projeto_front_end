import React from 'react';
import { Card } from "./Style.js";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

              {/* Carrossel de Fotos */}
              <div className="galeria">
                <Carousel>
                  {fotos.map((foto, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={foto}
                        alt={`Foto ${index + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DetalhesCard;
