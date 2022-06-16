import { Barbell } from "phosphor-react";

const AccomplishementPending: React.FC = () => {
  return (
    <div className="accomplishement--pending__container">
      <h3 className="heading-tertiary accomplishement--pending__heading">Řešíme</h3>
      <ul>
        <li>
          <Barbell className="accomplishement--pending__icon" />
          <span>Pořádek ve městě</span>
        </li>
        <li>
          <Barbell className="accomplishement--pending__icon" />
          <span>Výstavbu plovárny</span>
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
          <span>Kulturu ve městě</span>
        </li>
        <li>
          <Barbell className="accomplishement--pending__icon" />
          <span>Péči o městskou zeleň</span>
        </li>
      </ul>
    </div>
  );
};

export default AccomplishementPending;
