import { Article, UsersFour, Person } from "phosphor-react";
const FutureElection: React.FC = () => {
  return (
    <section className="future-election__container">
      <div className="future-election__wrapper">
        <h2 className="heading-secondary">
        Volby v roce 2022 vyhrajeme a prosadíme maximum z našeho programu
        </h2>

        <div className="future-election__grid">
          <div className="future-election__grid__item">
            <h3 className="heading-tertiary">Volby 2022</h3>
            <ul>
              <li>
                <Article className="future-election__grid__item--icon" />
                <span>
                  <strong>30+% </strong>hlasů
                </span>
              </li>
              <li>
                <UsersFour className="future-election__grid__item--icon" />
                <span>
                  <strong> 100 000+</strong> hlasů
                </span>
              </li>
              <li>
                <Person className="future-election__grid__item--icon" />
                <span>
                  <strong>10+</strong> zastupitelů
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
