import { Fragment, useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

import SortProducts from "./SortProducts";

const Product = () => {
  const [productsArr, setProductsArr] = useState([]);
  const [spinnerIsLoading, setSpinnerIsLoading] = useState(false);

  useEffect(() => {
    setSpinnerIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsArr(data);
        setSpinnerIsLoading(false);
      });
  }, []);

  return (
    <Fragment>
      {spinnerIsLoading ? (
        <LoadingSpinner />
      ) : (
        <SortProducts productsArr={productsArr} />
      )}
    </Fragment>
  );
};

export default Product;
