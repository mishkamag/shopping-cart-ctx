import { useContext } from "react";
import ShoppingCartContext from "../../store/ShoppingCartCtx";
import classes from "./SingleProduct.module.css";

const SingleProduct = (props) => {
  const { img, title, price } = props;
  const ctx = useContext(ShoppingCartContext);
  return (
    <section className={classes.container}>
      <div className={classes.card}>
        <img src={img} alt={title} />
        <div className={classes.describtion}>
          <h3>{title}</h3>
          <span>${price}</span>
        </div>
        <button onClick={ctx.addToCart}>Add to cart</button>
      </div>
    </section>
  );
};

export default SingleProduct;
