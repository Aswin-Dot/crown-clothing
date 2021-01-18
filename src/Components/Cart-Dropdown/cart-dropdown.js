import React from 'react';
import CartItem from '../Cart-Item/cart-item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../Redux/cart/cart-selectors';
import CustomButton from '../Custom-Button/custom-button';
import './cart-dropdown.styles.scss';

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

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps) (CartDropdown);