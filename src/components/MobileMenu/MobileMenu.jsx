import css from "./MobileMenu.module.css";
import PropTypes from "prop-types";
import icon from "../../assets/icons.svg";
import logo from "../../assets/Logo/Black/1103_black_transparent-01.png";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`${css.menu} ${isOpen ? css.active : ""}`}>
      <a href="/">
        <img src={logo} width={80} alt="" />
      </a>
      <button onClick={onClose} type="button">
        <svg className={css.icon} width={45} height={45}>
          <use href={icon + "#icon-close"}></use>
        </svg>
      </button>
    </div>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
