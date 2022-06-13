import { Article, UsersFour, Person } from "phosphor-react";
const FutureElection: React.FC = () => {
  return (
    <section className="future-election__container">
      <div className="future-election__wrapper">
        <h2 className="heading-secondary">
          Volby v roce 2022 plánujeme vyhrát a stát se nejsilnější stranou v
          Teplicích
        </h2>

        <div className="future-election__grid">
          <div className="future-election__grid__item">
            <h3 className="heading-tertiary">Volby 2022</h3>
            <ul>
              <li>
                <Article className="future-election__grid__item--icon" />
                <span>
                  <strong>35+% </strong>hlasů
                </span>
              </li>
              <li>
                <UsersFour className="future-election__grid__item--icon" />
                <span>
                  <strong> 110 000+</strong> hlasů
                </span>
              </li>
              <li>
                <Person className="future-election__grid__item--icon" />
                <span>
                  <strong>11</strong> zastupitelů
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureElection;
