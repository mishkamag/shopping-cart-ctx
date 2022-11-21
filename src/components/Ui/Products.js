import { useEffect, useState } from "react";
import classes from "./Products.module.css";

const Product = () => {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsArr(data);
        console.log(productsArr);
      });
  }, []);

  return (
    <div className={classes.prodContainer}>
      {productsArr.map((prod) => (
        <Product />
      ))}
    </div>
  );
};

export default Product;
