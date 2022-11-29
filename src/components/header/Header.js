import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ShoppingCartContext from "../../store/ShoppingCartCtx";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const ctx = useContext(ShoppingCartContext);

  const list = ctx.shoppingCartList.length;
  return (
    <nav className={classes.nav}>
      <Link className={classes.brand} to="/">
        Mk Shop
      </Link>
      <ul>
        <li>
          <Link className={classes.home} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FiShoppingCart size={28} />
            {list === 0 ? null : list}
          </Link>
        </li>
        <li>
          <Link to="/signIn">Sign In</Link>
        </li>
        <li>
          <Link to="/signUp">Sign Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
