import { useContext } from "react";
import AuthContext from "../../store/Auth-context";
import classes from "./SingleProduct.module.css";

const SingleProduct = (props) => {
  const ctx = useContext(AuthContext);
  const { img, title, price, managing, manageCart } = props;

  function manageCartHandler() {
    ctx.user ? manageCart(props) : alert("Sign up first");
  }

  let AddOrRemove = managing === "Adding" ? "ADD TO CART" : "REMOVE FROM CART";

  return (
    <div className={classes.home}>
      <div className={classes.card}>
        <img src={img} alt="" />
        <p>{title}</p>
        <h3>$. {price}</h3>
        <button onClick={manageCartHandler}>{AddOrRemove}</button>
      </div>
    </div>
  );
};

export default SingleProduct;
