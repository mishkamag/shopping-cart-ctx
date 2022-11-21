import classes from "./SingleProduct.module.css";

const SingleProduct = (props) => {
  const { img, title, price } = props;
  return (
    <section className={classes.container}>
      <div className={classes.card}>
        <img src={img} alt={title} />

        <h3>{title}</h3>
        <span>${price}</span>

        <button>Add to cart</button>
      </div>
    </section>
  );
};

export default SingleProduct;
