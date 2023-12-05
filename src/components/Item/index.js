import React, { useState } from 'react';
import './item.css';

const Item = ({ itemData, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCartClick = () => {
    onAddToCart({ ...itemData, cartItemId: itemData.id }, quantity);
  };

  return (
    <div className="item">
      <div className="item-image">
        <img src={itemData.imgUrl} className="resp-img" alt={itemData.name} />
      </div>
      <p>
        <b>Name:</b>
        {itemData.name}
      </p>
      <div>
        <b>Description:</b>
        <p>{itemData.description}</p>
      </div>
      <p>
        <b>Price:</b>
        {itemData.price}$
      </p>
      <p>
        <input
          type="number"
          className="item-price"
          value={quantity}
          onChange={handleQuantityChange}
          min={1}
        />
      </p>
      <p>
        <button onClick={handleAddToCartClick}>Add to cart</button>
      </p>
    </div>
  );
};

export default Item;
