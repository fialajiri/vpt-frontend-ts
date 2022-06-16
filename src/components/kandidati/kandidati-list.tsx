import { KandidatDoc } from "../../interfaces/models";
import KandidatCard from "./kandidat-card";

interface KandidatiListProps {
  kandidati: KandidatDoc[];
}

const KandidatiList: React.FC<KandidatiListProps> = ({ kandidati }) => {
  return (
    <section className="kandidati-list">
      <h1 className="headingPrimary kandidati-list__title">Naši Kandidáti</h1>
      <ul>
        {kandidati.map((kandidat) => (
          <li key={kandidat.id}>
            <KandidatCard kandidat={kandidat} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default KandidatiList;
