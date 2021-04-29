import React from 'react';
import CartIcon from '../cart-icon/cart-icon.component';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton> GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
