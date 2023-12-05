import React from 'react';
import Item from '../Item';

const ItemList = ({ data, onAddToCart, onRemoveItem }) => {
  return (
    <div id='itemlist'>
      {data.map((item, index) => (
        <Item
          key={`key-${item.id}-${index}`}
          itemData={item}
          onAddToCart={onAddToCart}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
