import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/CartSlice';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { LuArrowBigLeft } from 'react-icons/lu';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  console.log(cart, 'cart')
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='heading'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <LuArrowBigLeft fontSize={20} onClick={goBack} />
            <h2>Cart</h2>
          </div>
          <p>Total Items : {cart.items.length}</p>

        </div>
        {cart.items.map((item) => (
          <div key={item.id} className='cart-item'>
            <h3>{item.name}</h3>
            <hr />
            <div className='counter'>
              <h5 >Quantity: </h5>
              <div className='button-div'>
                <button className='counterBtn-dec' onClick={() => handleDecrement(item.id)}>-</button>
                <p className='quantity'>{item.quantity}</p>
                <button className='counterBtn-inc' onClick={() => handleIncrement(item.id)}>+</button>

              </div>
              <button className='remove-button' onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}


      </div>
    </div>
  );
};

export default Cart;
