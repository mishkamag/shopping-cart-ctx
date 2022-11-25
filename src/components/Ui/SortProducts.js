import { useContext, useState } from "react";
import ShoppingCartContext from "../../store/ShoppingCartCtx";

import SingleProduct from "./SingleProduct";

const SortProducts = ({ productsArr }) => {
  const ctx = useContext(ShoppingCartContext);
  const [selectValue, setSelectValue] = useState("");

  const lowestFirst = [...productsArr]
    .sort((a, b) => a.price - b.price)
    .map((prod) => (
      <SingleProduct
        id={prod.id}
        key={prod.key}
        img={prod.image}
        title={prod.title}
        price={prod.price}
        manageCart={ctx.addToCart}
        managing="Adding"
      />
    ));

  const highestFirst = [...productsArr]
    .sort((a, b) => b.price - a.price)
    .map((prod2) => (
      <div>
        <SingleProduct
          id={prod2.id}
          key={prod2.key}
          img={prod2.image}
          title={prod2.title}
          price={prod2.price}
          manageCart={ctx.addToCart}
          managing="Adding"
        />
      </div>
    ));

  const selectChangeHandler = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <div>
      <select
        name="price"
        id="price"
        onChange={selectChangeHandler}
        defaultValue={selectValue}
      >
        <option value="" disabled selected>
          Filter By Price
        </option>
        <option>Price (lowest first)</option>
        <option>Price (highest first)</option>
      </select>
      {selectValue === "Price (lowest first)" ? lowestFirst : highestFirst}
    </div>
  );
};

export default SortProducts;
