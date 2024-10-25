import { Card } from "./Style";

const AtletaCard = (props) => {
  const { nome, src, detalhamento, integrantes } = props; // Desestruturando props
  const resumoDetalhamento = detalhamento.length > 150 ? detalhamento.substring(0, 150) + '...' : detalhamento;

  return (

    <Card>
      <div className="nome">{nome}</div>
      <div className="notnome">

        <div className="image-container">
          <img src={src} alt={`Imagem do projeto ${nome}`} />
        </div>

        <div className="conteudo">
          <div className="detalhes">
            <p>{resumoDetalhamento}</p>
          </div>

          <div className="direita">

            <div className="integrantes-lista">
              {integrantes.map((integrante, index) => (
                <span key={index}>{integrante}</span>
              ))}
            </div>
            <button className="vermais">Ver mais</button>
          </div>
        </div>
      </div>

    </Card>
  );
};

export default AtletaCard;
