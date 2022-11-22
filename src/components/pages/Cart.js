import { useContext } from "react";
import ShoppingCartContext from "../../store/ShoppingCartCtx";
import Card from "../Ui/Card";
import SingleProduct from "../Ui/SingleProduct";

const Cart = () => {
  const ctx = useContext(ShoppingCartContext);

  return (
    <Card>
      {ctx.shoppingCartList.map((prod) => (
        <SingleProduct
          key={prod.id}
          img={prod.img}
          price={prod.price}
          title={prod.title}
          id={prod.id}
          managing="Removing"
          manageCart={ctx.removeFromCart}
        />
      ))}
    </Card>
  );
};

export default Cart;
