import Image from "next/image";
import { Fragment } from "react";
import { AktualitaDoc } from "../../interfaces/models";

interface AktualitaCardProps {
  aktualita: AktualitaDoc;
}

const AktualitaCard: React.FC<AktualitaCardProps> = ({ aktualita }) => {
  return (
    <Fragment>
      <div className="aktualita-card__text-container">
        <h2 className="heading-secondary aktualita-card__heading">
          {aktualita.title}
        </h2>
        <time className="aktualita-card__date">
          {new Date(aktualita.date).toLocaleDateString("cs-CZ")}
        </time>
        <h4 className="aktualita-card__perex">{aktualita.subtitle}</h4>
        <div
          className="aktualita-card__message"
          dangerouslySetInnerHTML={{ __html: aktualita.message }}
        ></div>
      </div>
      <figure className="aktualita-card__image">
        <Image
          src={aktualita.image.imageUrl}
          layout="fill"
          objectFit="contain"
        />
      </figure>
    </Fragment>
  );
};

export default AktualitaCard;
