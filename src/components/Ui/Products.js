import { useEffect, useState } from "react";

import SortProducts from "./SortProducts";

const Product = () => {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsArr(data);
      });
  }, []);

  return <SortProducts productsArr={productsArr} />;
};

export default Product;
