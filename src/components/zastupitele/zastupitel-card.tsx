import Image from "next/image";
import { Envelope } from "phosphor-react";
import { ZastupitelDoc } from "../../interfaces/models";

interface ZastupitelProps {
  zastupitel: ZastupitelDoc;
  side: "left" | "right";
}

const ZastupitelCard: React.FC<ZastupitelProps> = ({ zastupitel, side }) => {
  const zastupitelImage = (
    <div className="zastupitel__card__image">
      <Image
        width={864}
        height={864}
        src={zastupitel.image.imageUrl}
        alt={zastupitel.name}
      />
    </div>
  );

  return (
    <div className="zastupitel__card--container">
      <div className="zastupitel__card--wrapper">
        {side === "left" && zastupitelImage}
        <blockquote className="zastupitel__card__info">
          <p className="zastupitel__card__info--name">{zastupitel.name}</p>

          <div className="zastupitel__card__info--email-container">
            <Envelope className="zastupitel__card__info--email-icon" />
            <a
              href={`mailto:${zastupitel.email}`}
              className="zastupitel__card__info--email"
            >
              {zastupitel.email}
            </a>
          </div>
          <p className="zastupitel__card__info--occupation">
            {zastupitel.occupation}
          </p>
          <p className="zastupitel__card__info--bio">{zastupitel.bio}</p>
        </blockquote>
        {side === "right" && zastupitelImage}
      </div>
    </div>
  );
};

export default ZastupitelCard;
