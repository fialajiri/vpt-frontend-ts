import { ZastupitelDoc } from "../../interfaces/models";
import ZastupitelCard from "./zastupitel-card";

interface ZastupiteleProps {
  zastupitele: ZastupitelDoc[];
}

const ZastupiteleList: React.FC<ZastupiteleProps> = ({ zastupitele }) => {
  return (
    <section className="zastupitele-list__container">
      <h1 className="headingPrimary zastupitele-list__title">Vaši Zastupitelé</h1>
      <ul className="zastupitele-list__list">
        {zastupitele.map((zastupitel, index) => (
          <li key={zastupitel.id}>
            <ZastupitelCard
              zastupitel={zastupitel}
              side={index % 2 === 0 ? "right" : "left"}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ZastupiteleList;
