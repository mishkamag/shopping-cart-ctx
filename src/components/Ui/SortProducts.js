import { useContext, useState } from "react";
import ShoppingCartContext from "../../store/ShoppingCartCtx";
import Card from "./Card";

import SingleProduct from "./SingleProduct";

const SortProducts = ({ productsArr }) => {
  const ctx = useContext(ShoppingCartContext);
  const [selectValue, setSelectValue] = useState("");

  const lowestFirst = [...productsArr].sort((a, b) => a.price - b.price);

  const lowFilter = (
    <Card>
      {lowestFirst.map((prod) => (
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
  );

  const highestFirst = [...productsArr].sort((a, b) => b.price - a.price);

  const highestFilter = (
    <Card>
      {highestFirst.map((prod2) => (
        <SingleProduct
          id={prod2.id}
          key={prod2.id}
          img={prod2.image}
          title={prod2.title}
          price={prod2.price}
          manageCart={ctx.addToCart}
          managing="Adding"
        />
      ))}
    </Card>
  );

  const selectChangeHandler = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <div>
      <select
        name="price"
        id="price"
        onChange={selectChangeHandler}
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          Filter By Price
        </option>
        <option>Price (highest first)</option>
        <option>Price (lowest first)</option>
      </select>
      {selectValue === "Price (highest first)" ? highestFilter : lowFilter}
    </div>
  );
};

export default SortProducts;
