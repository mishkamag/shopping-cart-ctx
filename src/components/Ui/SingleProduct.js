import classes from "./SingleProduct.module.css";

const SingleProduct = (props) => {
  const { img, title, price, category } = props;
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img src={img} alt={title} />

        <h3>{title}</h3>
        <h3>{category}</h3>
        <span>${price}</span>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
