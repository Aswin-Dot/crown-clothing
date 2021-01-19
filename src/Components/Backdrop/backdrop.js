import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../Redux/cart/cart-action';
import { selectCartHidden } from '../../Redux/cart/cart-selectors';
import './backdrop.styles.scss';

const Backdrop = ({backdropVisibility, toggleCartHidden}) => (
    !backdropVisibility ? <div className="backdrop" onClick={toggleCartHidden}></div> : null
);

const mapStateToProps = createStructuredSelector({
    backdropVisibility: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);