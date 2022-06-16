import Image from "next/image";
import { KandidatDoc } from "../../interfaces/models";

interface KandidatCardProps {
  kandidat: KandidatDoc;
}

const KandidatCard: React.FC<KandidatCardProps> = ({ kandidat }) => {
  return (
    <div className="kandidat-card">
      <div className="kandidat-card__side kandidat-card__side--front">
        <div className="kandidat-card__image">
          <Image
            src={kandidat.image}
            alt={kandidat.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="kandidat-card__order-container">{kandidat.order}</div>
      </div>
      <div className="kandidat-card__side kandidat-card__side--back">
        <div className="kandidat-card__image--small">
          <Image
            src={kandidat.image}
            alt={kandidat.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="kandidat-card__info">
          <p className="kandidat-card__info-name">{kandidat.name}</p>
          <p className="kandidat-card__info-occupation">
            {kandidat.occupation}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default KandidatCard;
