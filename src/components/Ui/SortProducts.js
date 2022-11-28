import { useContext, useState } from "react";
import ShoppingCartContext from "../../store/ShoppingCartCtx";
import Card from "./Card";
import classes from "./SortProducts.module.css";

import SingleProduct from "./SingleProduct";

const SortProducts = ({ productsArr }) => {
  const ctx = useContext(ShoppingCartContext);
  const [selectValue, setSelectValue] = useState("");

  const lowestFirst = [...productsArr].sort((a, b) => a.price - b.price);
  const highestFirst = [...productsArr].sort((a, b) => b.price - a.price);

  let checkValue =
    selectValue === "Price (highest first)" ? highestFirst : lowestFirst;

  const selectChangeHandler = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <div>
      <select
        name="price"
        id="price"
        className={classes.select}
        onChange={selectChangeHandler}
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          Filter By Price
        </option>
        <option>Price (highest first)</option>
        <option>Price (lowest first)</option>
      </select>

      {
        <Card>
          {checkValue.map((prod) => (
            <SingleProduct
              id={prod.id}
              key={prod.id}
              img={prod.image}
              title={prod.title}
              price={prod.price}
              manageCart={ctx.addToCart}
              managing="Adding"
            />
          ))}
        </Card>
      }
    </div>
  );
};

export default SortProducts;
