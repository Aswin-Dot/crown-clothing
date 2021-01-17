import React from 'react';
import CartItem from '../Cart-Item/cart-item';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton from '../Custom-Button/custom-button';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>
        <CustomButton>GOT TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps) (CartDropdown);