import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <span className={classes.header}>Great Shop</span>
      <ul className={classes.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart 0</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
