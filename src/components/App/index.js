import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './app.css';
import ItemList from '../ItemsList';
import Cart from '../Cart';
import AddedItems from '../AddedItems'; 


const mockData = [
  { id: 1, name: 'chair-1', description: 'Chair-1 desc', imgUrl: 'https://rusticreddoor.com/cdn/shop/products/cherry-wood-dining-chair-ladder-back.jpg?v=1694125456&width=1445', price: 20 },
  { id: 2, name: 'chair-2', description: 'Chair-2 desc', imgUrl: 'https://wakefitdev.gumlet.io/img/npl_modified_images/darcy/sofa_WLCHRDRCFVBL/sofa_WLCHRDRCFVBL_1.jpg?w=732', price: 22 },
  { id: 3, name: 'chair-3', description: 'Chair-1 desc', imgUrl: 'https://www.branchfurniture.com/cdn/shop/products/B-Bmin_db723f4f-7f4e-4c74-9944-e38582290394.jpg?v=1620184069&width=1000', price: 24 },
  { id: 4, name: 'chair-4', description: 'Chair-2 desc', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Q2sy6mS9pTVCJIXrIC882kWYiB788cOwzQ&usqp=CAU', price: 26 },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleAddToCart = (item, quantity) => {
    const newItem = { ...item, quantity, cartItemId: uuidv4() };
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const handleRemoveFromCart = (cartItemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.cartItemId !== cartItemId));
  };

  return (
    <div className="app-container">
      <div className="item-list-container">
        <ItemList data={mockData} onAddToCart={handleAddToCart} />
      </div>
      <div className="cart-container">
        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      </div>
      <AddedItems cartItems={cartItems} total={calculateTotalPrice()} />
    </div>
  );
};

export default App;
