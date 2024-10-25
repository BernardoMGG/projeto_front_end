import { Card } from "./Style";

const AtletaCard = (props) => {
  const { nome, src, detalhamento, integrantes } = props; // Desestruturando props

  return (
    <Card>
      <div className="nome">{nome}</div>
      <figure>
        <img src={src} alt={`Imagem do projeto ${nome}`} />
      </figure>

      <div className="detalhes">
        <p>{detalhamento}</p>
        <div className="integrantes">
          {integrantes.map((integrante, index) => (
            <span key={index}>
              {/* <img
                src="/imagens/perfil.png" // Ícone genérico de participante
                alt={integrante}
              /> */}
              {integrante}
            </span>
          ))}
        </div>
      </div>

      <div className="botao">
        <button>Ver mais</button>
      </div>
    </Card>
  );
};

export default AtletaCard;
