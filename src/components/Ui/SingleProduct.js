import classes from "./SingleProduct.module.css";

const SingleProduct = (props) => {
  const { img, title, price } = props;
  return (
    <div className={classes.prodContainer}>
      <div className={classes.prodCard}>
        <img src={img} alt={title}></img>
        <p>{title}</p>
        <h3>$ {price}</h3>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
