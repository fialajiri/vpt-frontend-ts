import Image from "next/image";
import { KandidatDoc } from "../../interfaces/models";

interface KandidatCardProps {
  kandidat: KandidatDoc;
}

const KandidatCard: React.FC<KandidatCardProps> = ({ kandidat }) => {
  return (
    <div className="kandidat-card">
      <div className="kandidat-card__side kandidat-card__side--front">
        <div className="kandidat-card__image-container">
          <div className="kandidat-card__image-box">
            <Image
              src={kandidat.image}
              alt={kandidat.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="kandidat-card__order-container">{kandidat.order}</div>
        </div>
      </div>
      <div className=" kandidat-card__side kandidat-card__side--back">
        <div className="kandidat-card__image-container kandidat-card__image-container--back">          
          <div className="kandidat-card__order-container kandidat-card__order-container--back">
            {kandidat.order}
          </div>

          <div className="kandidat-card__image-box--small">
            <Image
              src={kandidat.image}
              alt={kandidat.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="kandidat-card__info">
          <p className="kandidat-card__info-name">{kandidat.name}</p>
          <p className="kandidat-card__info-occupation">
            {kandidat.occupation}
          </p>
          <p className="kandidat-card__info-motto">{kandidat.motto}</p>
          <p className="kandidat-card__info-text">{kandidat.text}</p>
        </div>
      </div>
    </div>
  );
};

export default KandidatCard;
