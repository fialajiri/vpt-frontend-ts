import { AktualitaDoc } from "../../interfaces/models";
import Button from "../ui-elements/button";
import AktualitaCard from "./aktualita-card";
import { useAuth } from "../../context/auth-context";

interface AktualityListProps {
  aktuality: AktualitaDoc[];
}

const AktualityList: React.FC<AktualityListProps> = ({ aktuality }) => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="aktuality">
      <h1 className="heading-primary aktuality__title">Aktuality</h1>
      {isAuthenticated && (
        <div className="aktuality__button--container">
          <Button inverse link="aktuality/new">Přidat aktualitu </Button>
        </div>
      )}
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

export default AktualityList;
