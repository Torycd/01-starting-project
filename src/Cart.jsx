import { useContext } from "react";
import Modal from "./Components/UI/Modal.jsx";
import CartContext from "./store/CartContext.jsx";
import { currencyFormatter } from "./util/formatting.js";
import Button from "./Components/UI/Button";
import UserProgressContext from "./store/UserProgressContext.jsx";
import CartItem from "./Components/UI/CartItem.jsx";

export default function Cart() {
  
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext)

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  function handleCloseCart(){
    userProgressCtx.hideCart()
  }
  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem key={item.id} name={item.name} quantity={item.quantity}/>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart} textOnly>Close</Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
