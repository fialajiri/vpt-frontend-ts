import { AktualitaDoc } from "../../interfaces/models";
import AktualitaCard from "./aktualita-card";

interface AktualityListProps {
  aktuality: AktualitaDoc[];
}

const AktualityList: React.FC<AktualityListProps> = ({ aktuality }) => {
  return (
    <section className="aktuality-list">
      <h1 className="headingPrimary"></h1>
      <ul>
        {aktuality.map((aktualita) => (
          <li key={aktualita.id}>
            <AktualitaCard aktualita={aktualita} />
          </li>
        ))}
      </ul>
    </section>
  );
};


export default AktualityList