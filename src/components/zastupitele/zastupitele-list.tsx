import { ZastupitelDoc } from "../../interfaces/models";
import ZastupitelCard from "./zastupitel-card";

interface ZastupiteleProps {
  zastupitele: ZastupitelDoc[];
}

const ZastupiteleList: React.FC<ZastupiteleProps> = ({ zastupitele }) => {
    console.log(zastupitele)
  return (
    <section>
      <h1 className="headingPrimary">Vaši Zastupitelé</h1>
      <ul>
        {zastupitele.map((zastupitel, index) => (
          <li key={zastupitel.id}>
            <ZastupitelCard
              zastupitel={zastupitel}
              side={index === 0 ? "right" : "left"}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ZastupiteleList;
