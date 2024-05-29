import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';

const ItemCard = ({ item, onAddToCart }) => {
  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <hr />
      <p>{item.description}</p>
      <button className='add-Button' onClick={() => onAddToCart(item)}><LuShoppingCart fontSize={24} />Add to Cart</button>
    </div>
  );
};

export default ItemCard;
