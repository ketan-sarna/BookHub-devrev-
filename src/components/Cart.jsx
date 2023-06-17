import React from "react";
import "../App";
import { useAppContext } from "./context/AppContext";

const Cart = () => {
  const { cart, addtocart, removecart } = useAppContext();

  console.log(cart);

  const cartchek = (id) => {
    const boolean = cart.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="cart">
      {cart.length > 0 ? cart.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img src={book.image_url} alt="#"></img>
          </div>
          <div>
            {cartchek(book.id) ? (
              <button onClick={() => removecart(book.id)}>
                Remove From Cart
              </button>
            ) : (
              <button onClick={() => addtocart(book)}>Add To Cart</button>
            )}
          </div>
        </div>
      )) : <h1>Your cart is empty</h1>}
    </div>
  );
};

export default Cart;
