import { Link } from "react-router-dom";
import classes from "./EmptyCart.module.css";
import noShop from "../../assets/noshop.png";

const EmptyCart = () => {
  return (
    <div className={classes.container}>
      <h2>
        Your cart is empty{" "}
        <Link className={classes.link} to="/">
          Go Back For Happy Shopping )
        </Link>
      </h2>
      <img src={noShop} alt="no shop" className={classes.shoppImg} />
    </div>
  );
};

export default EmptyCart;
