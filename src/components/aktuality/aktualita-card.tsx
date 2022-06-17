import Image from "next/image";
import { AktualitaDoc } from "../../interfaces/models";

interface AktualitaCardProps {
  aktualita: AktualitaDoc;
}

const AktualitaCard: React.FC<AktualitaCardProps> = ({ aktualita }) => {
  return <div className="aktualita-card">{aktualita.title}</div>;
};

export default AktualitaCard;
