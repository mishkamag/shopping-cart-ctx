import { useState } from "react";
import React from "react";

const ShoppingCartContext = React.createContext({
  shoppingCartList: [{}],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const ShoppingCartProvider = (props) => {
  const [shoppingCartList, setShoppingCartList] = useState([]);

  const addToCart = (prod) => {
    setShoppingCartList([...shoppingCartList, prod]);
  };
  console.log(shoppingCartList);

  const removeFromCart = () => {};

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCartList, addToCart, removeFromCart }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
