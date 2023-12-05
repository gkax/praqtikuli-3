import React from 'react';

const AddedItems = ({ cartItems, total }) => {
  const addedItemsStyle = {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ddd',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const listItemStyle = {
    marginBottom: '5px',
  };

  return (
    <div style={addedItemsStyle} className="added-items">
      <h2 style={headingStyle}>Added Items</h2>
      <ul style={listStyle}>
        {cartItems.map((item) => (
          <li key={item.cartItemId} style={listItemStyle}>
            {item.name} - Quantity: {item.quantity} - Subtotal: ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Price: ${total}</p>
    </div>
  );
};

export default AddedItems;
