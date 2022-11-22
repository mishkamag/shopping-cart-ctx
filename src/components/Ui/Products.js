import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Product = () => {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsArr(data);
      });
  }, []);

  return productsArr.map((prod) => (
    <SingleProduct
      key={prod.id}
      id={prod.id}
      img={prod.image}
      // description={prod.description}
      price={prod.price}
      title={prod.title}
      // category={prod.category}
    />
  ));
};

export default Product;
