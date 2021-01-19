import React from 'react';
import CartItem from '../Cart-Item/cart-item';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import { selectCartItems } from '../../Redux/cart/cart-selectors';
import { toggleCartHidden } from '../../Redux/cart/cart-action';
import CustomButton from '../Custom-Button/custom-button';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div>
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                        ))
                        ) : (
                            <span className='empty-message'>Your cart is empty!</span>
                            )}
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GOT TO CHECKOUT</CustomButton>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps) (CartDropdown));