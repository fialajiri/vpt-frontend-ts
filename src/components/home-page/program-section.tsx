import { Buildings, Tree, ShieldPlus, Bus, Handshake, Money, TreeEvergreen } from "phosphor-react";

const Program: React.FC = () => {
  return (
    <section className="program__container">
      <div className="program__wrapper">
        <h2 className="heading-secondary">Mezi naše hlavní programové priority patří především</h2>
        <ul className="program__priorities">
          <li className="program__priorities__item">
            <Tree className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Městské oázy</p>
            <p className="program__priorities__item--text">
              Ve spolupráci s Vámi zrealizujeme minimálně 10 městských oáz -
              rekonstrukcí veřejného prostoru. Od doplnění lavičky,
              pítka, stromu nebo kvetoucího záhonu po komplexní revitalizace. Více na <a className="program__priorities__item--link" href="https://www.mestskeoazy.cz/">mestskeoazy.cz</a>
            </p>
          </li>
          <li className="program__priorities__item">
            <TreeEvergreen className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Zdravé životní prostředí</p>
            <p className="program__priorities__item--text">
              Parky i sídlištní zeleň, o kterou se bude pečovat profesionálně, bude příjemnější a
              hezčí. Právě zeleň se z velké míry podílí na tom, jak se ve městě cítíme.
            </p>
          </li>
          <li className="program__priorities__item">
            <ShieldPlus className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Bezpečný a čistý veřejný prostor</p>
            <p className="program__priorities__item--text">
              Teplice a jejich okolí patří k oblastem s nejvyšší kriminalitou v České republice.
              Nejsme spokojeni s čistotou a pořádkem ve městě. Podnikneme kroky k nápravě situace.
            </p>
          </li>
          <li className="program__priorities__item">
            <Bus className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Fungujicí dopravní infrastruktura</p>
            <p className="program__priorities__item--text">
              Promyšlená doprava šetří náš čas, nervy i přírodu. Podpoříme bezemisní dopravu v
              centru města a obytných čtvrtích.
            </p>
          </li>
          <li className="program__priorities__item">
            <Handshake className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Vstřícná a užitečná samospráva</p>
            <p className="program__priorities__item--text">
              Zavedeme hodnocení kvality úřadu občany. Zajímá nás zpětná vazba, budeme na ni
              reagovat.
            </p>
          </li>
          <li className="program__priorities__item">
            <Money className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Přehledné hospodaření města</p>
            <p className="program__priorities__item--text">
              Chceme udržet městské finance v dobrém stavu. Investice nemusí znamenat zadlužení.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Program;
