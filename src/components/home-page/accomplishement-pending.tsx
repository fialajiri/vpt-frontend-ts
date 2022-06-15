import { Barbell } from "phosphor-react";

const AccomplishementPending: React.FC = () => {
  return (
    <div className="accomplishement--pending__container">
      <h3 className="heading-tertiary">Řešíme</h3>
      <ul>
        <li>
          <Barbell className="accomplishement--pending__icon" />
          <span>Pořádek ve městě</span>
        </li>
        <li>
          <Barbell className="accomplishement--pending__icon" />
          <span>Výstavba plovárny</span>
        </li>
        <li>
          <Barbell className="accomplishement--pending__icon" />
          <span>Parkování</span>
        </li>
        <li>
          <Barbell className="accomplishement--pending__icon" />
          <span>Městské byty</span>
        </li>
        <li>
          <Barbell className="accomplishement--pending__icon" />
          <span>Transparentnost dotační politiky města</span>
        </li>
        <li>
          <Barbell className="accomplishement--pending__icon" />
          <span>Kultura ve městě</span>
        </li>
        <li>
          <Barbell className="accomplishement--pending__icon" />
          <span>Péče o městskou zeleňy</span>
        </li>
      </ul>
    </div>
  );
};

export default AccomplishementPending;
