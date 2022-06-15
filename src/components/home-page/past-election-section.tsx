import { Article, UsersFour, Person } from "phosphor-react";

const PastElection: React.FC = () => {
  return (
    <section className="past-election__container">
      <div className="past-election__wrapper">
        <h2 className="heading-secondary">
        Již 7 let jsme druhým největším subjektem v městském zastupitelstvu
        </h2>

        <div className="past-election__grid">
          <div className="past-election__grid__item">
            <h3 className="heading-tertiary">Volby 2014</h3>
            <ul>
              <li>
                <Article className="past-election__grid__item--icon" />
                <span>
                  <strong>20.5%</strong> hlasů
                </span>
              </li>
              <li>
                <UsersFour className="past-election__grid__item--icon" />
                <span>
                  <strong>63 800</strong> hlasů
                </span>
              </li>
              <li>
                <Person className="past-election__grid__item--icon" />
                <span>
                  <strong>6</strong> zastupitelů
                </span>
              </li>
            </ul>
          </div>
          <div className="past-election__grid__item">
            <h3 className="heading-tertiary">Volby 2018</h3>
            <ul>
              <li>
                <Article className="past-election__grid__item--icon" />
                <span>
                  {" "}
                  <strong>26.2%</strong> hlasů
                </span>
              </li>
              <li>
                <UsersFour className="past-election__grid__item--icon" />
                <span>
                  <strong>84 841</strong> hlasů
                </span>
              </li>
              <li>
                <Person className="past-election__grid__item--icon" />
                <span>
                  <strong>8</strong> zastupitelů
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastElection;
