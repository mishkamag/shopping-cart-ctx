import { useContext } from "react";
import ShoppingCartContext from "../../store/ShoppingCartCtx";

const Cart = () => {
  const ctx = useContext(ShoppingCartContext);
  console.log(ctx.shoppingCartList);
  return <div>cart</div>;
};

export default Cart;
