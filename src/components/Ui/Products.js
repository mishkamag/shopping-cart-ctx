import { Fragment, useContext, useEffect, useState } from "react";
import ShoppingCartContext from "../../store/ShoppingCartCtx";
import Card from "./Card";
import SingleProduct from "./SingleProduct";
import SortProducts from "./SortProducts";

const Product = () => {
  const [productsArr, setProductsArr] = useState([]);

  const ctx = useContext(ShoppingCartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsArr(data);
      });
  }, []);

  return (
    <Fragment>
      <SortProducts productsArr={productsArr} />

      <Card>
        {productsArr.map((prod) => (
          <SingleProduct
            manageCart={ctx.addToCart}
            managing="Adding"
            key={prod.id}
            id={prod.id}
            img={prod.image}
            price={prod.price}
            title={prod.title}
          />
        ))}
        ;
      </Card>
    </Fragment>
  );
};

export default Product;
