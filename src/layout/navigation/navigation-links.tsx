import Link from "next/link";
import { useRouter } from "next/router";

const NavigationLinks: React.FC = () => {
  const router = useRouter();

  const getClass = (pathName: string): string => {
    if (router.pathname === pathName) return "nav__list__item nav__list__item--active";
    return "nav__list__item";
  };

  return (
    <ul className="nav__list">
      <li className={getClass("/")}>
        <Link href="/">Domů</Link>
      </li>
      <li className={getClass('/kandidati')}>
        <Link href='/kandidati'>Kandidáti</Link>
      </li>
      <li className={getClass("/zastupitele")}>
        <Link href="/zastupitele">Zastupitelé</Link>
      </li>
      <li className={getClass("/aktuality")}>
        <Link href='/aktuality'>Aktuality</Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
