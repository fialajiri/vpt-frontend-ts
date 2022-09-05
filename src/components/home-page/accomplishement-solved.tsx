import { CheckCircle } from "phosphor-react";

const AccomplishementSolved: React.FC = () => {
  return (
    <div className="accomplishement--solved__container">
      <h3 className="heading-tertiary accomplishement--solved__heading">
        Splněno
      </h3>
      <ul className="accomplishement--solved__list">
        <li>
          <CheckCircle className="accomplishement--solved__icon" />
          <span>Omezení hazardu</span>
        </li>
        <li>
          <CheckCircle className="accomplishement--solved__icon" />
          <span>Komunitní plánování</span>
        </li>
        <li>
          <CheckCircle className="accomplishement--solved__icon" />
          <span>Započetí prací na novém územním plánu</span>
        </li>
        <li>
          <CheckCircle className="accomplishement--solved__icon" />
          <span>On-line přenosy z jednání zastupitelstva</span>
        </li>
        <li>
          <CheckCircle className="accomplishement--solved__icon" />
          <span>Pravidelná setkávání s občany</span>
        </li>
        <li>
          <CheckCircle className="accomplishement--solved__icon" />
          <span>
             <a className="accomplishement--solved__program" href="/program/program.pdf" target="_blanc">Moderní program</a> pro naše město
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AccomplishementSolved;
