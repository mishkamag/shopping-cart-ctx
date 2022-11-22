import { useState } from "react";
import React from "react";

const ShoppingCartContext = React.createContext({
  shoppingCartList: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const ShoppingCartProvider = (props) => {
  const [shoppingCartList, setShoppingCartList] = useState([]);

  const addToCart = (prod) => {
    setShoppingCartList((prevProd) => {
      const existingId = prevProd.find(
        (singleProd) => singleProd.id === prod.id
      );
      if (existingId) {
        alert("product already exist");
        return [...prevProd];
      } else if (prevProd) {
        return [...prevProd, prod];
      } else {
        return;
      }
    });
  };

  const removeFromCart = (prod) => {
    setShoppingCartList((prevProds) => {
      return prevProds.filter((prev) => prev.id !== prod.id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCartList, addToCart, removeFromCart }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
