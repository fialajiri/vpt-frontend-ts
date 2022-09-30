import { Article, UsersFour, Person } from "phosphor-react";
const FutureElection: React.FC = () => {
  return (
    <section className="future-election__container">
      <div className="future-election__wrapper">
        <h2 className="heading-secondary">
        Výsledek voleb do zastupitelstva v roce 2022
        </h2>

        <div className="future-election__grid">
          <div className="future-election__grid__item">
            <h3 className="heading-tertiary">Volby 2022</h3>
            <ul>
              <li>
                <Article className="future-election__grid__item--icon" />
                <span>
                  <strong>19.7% </strong>hlasů
                </span>
              </li>
              <li>
                <UsersFour className="future-election__grid__item--icon" />
                <span>
                  <strong> 65 116</strong> hlasů
                </span>
              </li>
              <li>
                <Person className="future-election__grid__item--icon" />
                <span>
                  <strong>5</strong> zastupitelů
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
