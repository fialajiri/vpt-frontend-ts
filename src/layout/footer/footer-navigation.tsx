import { useContext } from "react";
import Link from "next/link";

const FooterNavigation: React.FC = () => {
  return (
    <ul className="footer__nav__list">
      <li className="footer__nav__list--item">
        <Link href="/">Domů</Link>
      </li>
      <li className="footer__nav__list--item">
        <Link href="/kandidati">Kandidáti</Link>
      </li>
      <li className="footer__nav__list--item">
        <Link href="/zastupitele">Zastupitelé</Link>
      </li>
      <li className="footer__nav__list--item">
        <Link href="/aktuality">Aktuality</Link>
      </li>
      {/* {auth.token && (
        <li className="footer__nav__list__item">
          <Link href="/admin">Admin</Link>
        </li>
      )} */}
    </ul>
  );
};

export default FooterNavigation;
