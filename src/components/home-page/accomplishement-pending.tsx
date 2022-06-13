import { Barbell } from "phosphor-react";

const AccomplishementPending: React.FC = () => {
  return (
    <div className='accomplishement--pending__container'>
      <h3 className='heading-tertiary'>Řešíme</h3>
      <ul>
        <li>
          <Barbell className='accomplishement--pending__icon' />
          <span>Výstavba plovárny</span>
        </li>
        <li>
          <Barbell className='accomplishement--pending__icon' />
          <span>Více parkovacích ploch</span>
        </li>
        <li>
          <Barbell className='accomplishement--pending__icon' />
          <span>Městské byty</span>
        </li>
        <li>
          <Barbell className='accomplishement--pending__icon' />
          <span>Lorem ipsum</span>
        </li>
      </ul>
    </div>
  );
};

export default AccomplishementPending;
