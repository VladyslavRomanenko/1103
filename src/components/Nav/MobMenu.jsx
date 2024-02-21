import { useState } from "react";
import css from "./MobMenu.module.css";
// import logo from "../../assets/Logo/Black/1103_black_transparent-01.png";
import icon from "../../assets/icons.svg";

const MobMenu = () => {
  const [burgerClass, setBurgerClass] = useState(
    `${css.burgerBar} ${css.unclicked}`
  );
  const [menuClass, setMenuClass] = useState(`${css.menu} ${css.hidden}`);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass(`${css.burgerBar} ${css.clicked}`);
      setMenuClass(`${css.menu} ${css.visible}`);
    } else {
      setBurgerClass(`${css.burgerBar} ${css.unclicked}`);
      setMenuClass(`${css.menu} ${css.hidden}`);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    // <div className={css.container}>
    <>
      <nav className={css.nav}>
        <a href="./">
          <svg className={css.icon} width={80}>
            <use href={icon + "#icon-black"}></use>
          </svg>
        </a>
        <div className={css.burgerMenu} onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>
      <div className={menuClass}>
        <ul className={css.list}>
          <li>
            <a className={css.link} href="./">
              Головна
            </a>
          </li>
          <li>
            <a className={css.link} href="./">
              Товар
            </a>
          </li>
          <li>
            <a className={css.link} href="./">
              Контакти
            </a>
          </li>
        </ul>
      </div>
    </>
    // </div>
  );
};

export default MobMenu;
