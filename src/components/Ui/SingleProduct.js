import classes from "./SingleProduct.module.css";

const SingleProduct = (props) => {
  const { img, title, price, managing, manageCart } = props;

  function manageCartHandler() {
    manageCart(props);
  }

  let AddOrRemove = managing === "Adding" ? "ADD TO CART" : "REMOVE FROM CART";

  return (
    <section className={classes.container}>
      <div className={classes.card}>
        <img src={img} alt={title} />
        <div className={classes.describtion}>
          <h3>{title}</h3>
          <span>${price}</span>
        </div>
        <button onClick={manageCartHandler}>{AddOrRemove}</button>
      </div>
    </section>
  );
};

export default SingleProduct;
