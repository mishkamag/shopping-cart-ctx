import { useState } from "react";
import SingleProduct from "./SingleProduct";

const SortProducts = ({ productsArr }) => {
  const [selectValue, setSelectValue] = useState("");

  const lowestFirst = [...productsArr]
    .sort((a, b) => a.price - b.price)
    .map((prod) => (
      <SingleProduct
        id={prod.id}
        key={prod.key}
        img={prod.img}
        title={prod.title}
        price={prod.price}
      />
    ));

  const highestFirst = [...productsArr]
    .sort((a, b) => b.price - a.price)
    .map((prod2) => (
      <div>
        <SingleProduct
          id={prod2.id}
          key={prod2.key}
          img={prod2.img}
          title={prod2.title}
          price={prod2.price}
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
        onClick={selectChangeHandler}
        defaultValue={selectValue}
      >
        {/* <option value="" disabled selected>
          Filter Products
        </option> */}
        <option value={lowestFirst}>Price (lowest first)</option>
        <option value={highestFirst}>Price (highest first)</option>
      </select>
    </div>
  );
};

export default SortProducts;
