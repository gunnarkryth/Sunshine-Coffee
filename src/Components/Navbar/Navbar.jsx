import s from "./Style.module.scss";

import { NavLink as Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={s.Navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};
