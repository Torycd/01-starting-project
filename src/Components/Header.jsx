import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg"
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
    const cartCtx = useContext(CartContext);
    const totalCartItem = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity
    }, 0)
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A resturant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>{`Cart ${totalCartItem}`}</Button>
      </nav>
    </header>
  );
};

export default Header;
