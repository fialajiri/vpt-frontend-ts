import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const FooterNavigation: React.FC = () => {
  const router = useRouter();

  const getClass = (pathName: string): string => {
    if (router.pathname === pathName)
      return "footer__nav__list--item footer__nav__list--item--active";
    return "footer__nav__list--item";
  };

  return (
    <ul className="footer__nav__list">
      <li className={getClass("/")}>
        <Link href="/">Domů</Link>
      </li>

      <li className={getClass("/kandidati")}>
        <Link href="/kandidati">Kandidáti</Link>
      </li>
      <li className={getClass("/zastupitele")}>
        <Link href="/zastupitele">Zastupitelé</Link>
      </li>
      <li className={getClass("/aktuality")}>
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
