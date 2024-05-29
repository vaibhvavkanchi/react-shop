import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import ItemCard from './ItemCard';
import '../styles/shop.css'
import Header from './Header';

const items = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' },
  { id: 4, name: 'Item 4', description: 'Description for Item 4' },
  { id: 5, name: 'Item 5', description: 'Description for Item 5' },
  { id: 6, name: 'Item 6', description: 'Description for Item 6' },
  { id: 7, name: 'Item 7', description: 'Description for Item 7' },
  { id: 8, name: 'Item 8', description: 'Description for Item 8' },
  { id: 9, name: 'Item 9', description: 'Description for Item 9' },
  { id: 10, name: 'Item 10', description: 'Description for Item 10' },
];

const Home = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {

    dispatch(addItem(item));
  };

  return (
    <>
      <Header />
      <div className='container'>
        <h2>Products</h2>
        <div className="items-container">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} onAddToCart={() => handleAddToCart(item)} />
          ))}
        </div>

      </div>
    </>
  );
};

export default Home;
