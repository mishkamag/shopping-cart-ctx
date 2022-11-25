import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ShoppingCartContext from "../../store/ShoppingCartCtx";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const ctx = useContext(ShoppingCartContext);

  const list = ctx.shoppingCartList.length;
  return (
    <div>
      <span className={classes.header}>Great Shop</span>
      <ul className={classes.nav}>
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
      </ul>
    </div>
  );
};

export default Header;
