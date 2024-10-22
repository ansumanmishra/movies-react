import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';
import './Cart.css';
import {TiDelete} from "react-icons/ti";
import {removeCart, updateQuantity} from '../../store/cartSlice.ts';

const CartListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.totalPrice) ?? cartItem.price, 0).toFixed(2);

  if (cartItems.length === 0) {
    return <div>Cart is empty</div>
  }

  return (
    <div className="cart-listing-container">
      {cartItems.map((cartItem) => (
        <div className="cart-item" key={cartItem.id}>
          <div className="cart-item-image">
            <img src={cartItem.image} alt={cartItem.title}/>
          </div>
          <div className="cart-item-details">
            <h3>{cartItem.title}</h3>
            <p>${cartItem.totalPrice ?? cartItem.price}</p>
          </div>
          <div className="cart-item-quantity">
            <select name="" id=""
                    onChange={(e) => dispatch(updateQuantity({id: cartItem.id, quantity: e.target.value}))}
                    value={cartItem.quantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <TiDelete className="delete-icon" onClick={() => dispatch(removeCart(cartItem.id))}/>
        </div>
      ))}
      <div className="total-price-block">
        <div style={{textAlign: 'right'}}>Total: {totalPrice}</div>
      </div>
    </div>
  )
}
export default CartListing;