import icon from "../../assets/icons.svg";
import logo from "../../assets/Logo/Black/1103_black_transparent-01.png";
const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={logo} width={80} alt="" />
      </a>
      <button type="button">
        <svg className="icon" width={45} height={45}>
          <use href={icon + "#icon-burger"}></use>
        </svg>
      </button>
    </div>
  );
};

export default Header;
