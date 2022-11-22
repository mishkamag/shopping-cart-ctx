import classes from "./SingleProduct.module.css";

const SingleProduct = (props) => {
  const { img, title, price, managing, manageCart } = props;

  function manageCartHandler() {
    manageCart(props);
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
