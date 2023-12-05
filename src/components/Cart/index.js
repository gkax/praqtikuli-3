import React from 'react';
import './cart.css';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div id="cart">
      <i className="fa fa-shopping-cart"></i>
      <div>
        {cartItems.map((item) => (
          <div key={item.cartItemId} className="cart-item">
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price * item.quantity}$</p>
            <button onClick={() => onRemoveFromCart(item.cartItemId)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;