import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import "./CartProduct.css";
import { productQty, removeFromCart } from '../../actions';
import DeleteIcon from '@mui/icons-material/Delete';

const CartProduct = (item) => { 
  const { thumbnail, title, price, rating } = item.item;  
  let dispatch = useDispatch(); 
  const [input, setInput] = useState(item.item.qty);

  const changeHandler = (e) => {
    setInput(e.target.value);
    dispatch(productQty(item.item.id, e.target.value));
  }

  return (
    <div className='cart-product'>
        <img src={thumbnail} alt={title} className="cart-product-image"/>
        <div className='cart-product-info'>
            <p className='cart-product-title'>{title}</p>
            <p className='cart-product-price'>
                <strong>Rs</strong>
                <strong>{price}</strong>
            </p>
        </div>
        <div className='cart-quantity'>
            <div className='cart-product-qty'>
                <label htmlFor='qty'>Qty</label>
                <input
                    min="1"
                    type="number"
                    id="qty"
                    name="qty"
                    value={input}
                    onChange = {changeHandler}
                /> 
            </div>
            <button className='remove-cart-button' onClick={()=>dispatch(removeFromCart(item.item.id))}>
              <img
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              alt=""
          />
            </button>
        </div>
    </div>
    
  )
}

export default CartProduct