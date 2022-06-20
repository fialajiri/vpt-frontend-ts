import Link from "next/link";
import { useRouter } from "next/router";
import { FacebookLogo, InstagramLogo } from "phosphor-react";

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
      <li className={getClass("/kandidati")}>
        <Link href="/kandidati">Kandidáti</Link>
      </li>
      <li className={getClass("/zastupitele")}>
        <Link href="/zastupitele">Zastupitelé</Link>
      </li>
      <li className={getClass("/aktuality")}>
        <Link href="/aktuality">Aktuality</Link>
      </li>
      <li className="nav__list__item">
        <a href="https://www.facebook.com/search/top?q=volba%20pro%20teplice" target="_blank">
          <FacebookLogo className="nav__list__icon" weight="bold"/>
        </a>
      </li>
      <li className="nav__list__item">
        <a href="https://instagram.com/volbaproteplice?igshid=YmMyMTA2M2Y=" target="_blank">
          <InstagramLogo className="nav__list__icon" weight="bold"/>
        </a>
      </li>
    </ul>
  );
};

export default NavigationLinks;
