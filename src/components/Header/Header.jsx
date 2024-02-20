import { useState } from "react";
import icon from "../../assets/icons.svg";
import logo from "../../assets/Logo/Black/1103_black_transparent-01.png";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header">
      <a href="/">
        <img src={logo} width={80} alt="" />
      </a>
      <button type="button" onClick={toggleMenu}>
        <svg className="icon" width={45} height={45}>
          <use href={icon + "#icon-burger"}></use>
        </svg>
      </button>
      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />}
    </div>
  );
};

export default Header;
