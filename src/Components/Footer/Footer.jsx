import { NavLink as Link } from "react-router-dom";

import s from "./Style.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <section>
        <h3>Contact</h3>
        <ul>
          <li>Supercoffeeroad 223b</li>
          <li>92230 New Coffeeland</li>
          <li>Phone: 22331122</li>
          <li>Mail: coffeeland@info.com</li>
        </ul>
      </section>
      <section>
        <h3>Legal</h3>
        <ul>
          <li>
            <Link to="/cookies">Cookie policy</Link>
          </li>
          <li>Return policy</li>
          <li>Shipping</li>
          <li>Terms and Conditions</li>
        </ul>
      </section>
      <section>
        <h3>About</h3>
        <ul>
          <li>History</li>
          <li>The people behind</li>
          <li>Partnerships</li>
          <li>International</li>
        </ul>
      </section>
    </footer>
  );
};
