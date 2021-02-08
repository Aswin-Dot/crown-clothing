import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem} from '../../Redux/cart/cart-action';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => {
    
    const { name, imageUrl, price, quantity } = cartItem;

    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <span className="arrow" onClick={() => removeItem(cartItem)}>&#x276E;</span>
            <span className="value">{quantity}</span>
            <span className="arrow" onClick={() => addItem(cartItem)}>&#10095;</span>
        </span>
        <span className='price'>{quantity * price}</span>
        <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);