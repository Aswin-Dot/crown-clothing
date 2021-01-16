import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../Custom-Button/custom-button';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CustomButton>GOT TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;