import clsx from "clsx";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div className={s.headerBox}>
      <NavLink className={buildLinkClass} to="/">
        Home Page
      </NavLink>
      <NavLink className={buildLinkClass} to="/movies">
        Movies Page
      </NavLink>
    </div>
  );
};
export default Header;
