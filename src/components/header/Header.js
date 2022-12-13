import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ShoppingCartContext from "../../store/ShoppingCartCtx";
import { FiShoppingCart } from "react-icons/fi";
import AuthContext from "../../store/Auth-context";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const ctx = useContext(ShoppingCartContext);
  const authCtx = useContext(AuthContext);

  const list = ctx.shoppingCartList.length;

  return (
    <nav className={classes.nav}>
      <Link to="/" className={classes.brand}>
        Mk Shop
      </Link>

      <ul className={classes.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            <FiShoppingCart size={28} />
            {list === 0 ? null : list}
          </Link>
        </li>
        <li className={classes.signup}>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <FaSignOutAlt
            onClick={authCtx.logoutHandler}
            to="#"
            size={28}
            cursor="pointer"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
