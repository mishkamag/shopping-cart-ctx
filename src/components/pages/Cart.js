import { useContext } from "react";
import ShoppingCartContext from "../../store/ShoppingCartCtx";
import Card from "../Ui/Card";
import SingleProduct from "../Ui/SingleProduct";

const Cart = () => {
  const ctx = useContext(ShoppingCartContext);
  console.log(ctx.shoppingCartList);

  return (
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
        <h1>No Item in Cart</h1>
      )}
    </Card>
  );
};

export default Cart;
