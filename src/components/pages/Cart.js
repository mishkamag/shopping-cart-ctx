import { Fragment, useContext } from "react";
import ShoppingCartContext from "../../store/ShoppingCartCtx";
import Header from "../header/Header";
import Card from "../Ui/Card";
import SingleProduct from "../Ui/SingleProduct";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const ctx = useContext(ShoppingCartContext);

  return (
    <Fragment>
      <Header />
      <Card>
        {ctx.shoppingCartList.length > 0 ? (
          ctx.shoppingCartList.map((prod) => (
            <SingleProduct
              key={prod.id}
              img={prod.img}
              price={prod.price}
              title={prod.title}
              id={prod.id}
              managing="Removing"
              manageCart={ctx.removeFromCart}
            />
          ))
        ) : (
          <EmptyCart />
        )}
      </Card>
    </Fragment>
  );
};

export default Cart;
