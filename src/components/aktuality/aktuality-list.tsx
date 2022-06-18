import { AktualitaDoc } from "../../interfaces/models";
import AktualitaCard from "./aktualita-card";

interface AktualityListProps {
  aktuality: AktualitaDoc[];
}

const AktualityList: React.FC<AktualityListProps> = ({ aktuality }) => {
  return (
    <section className="aktuality">
      <h1 className="heading-primary aktuality__title">Aktuality</h1>
      <ul className="aktuality__list">
        {aktuality.map((aktualita) => (
          <li className="aktuality__list-item" key={aktualita.id}>
            <AktualitaCard aktualita={aktualita} />
          </li>
        ))}
      </ul>
    </section>
  );
};


export default AktualityList