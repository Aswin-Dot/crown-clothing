import React from 'react';
import { auth } from '../../Firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import { selectCartHidden } from '../../Redux/cart/cart-selectors';
import { selectCurrentUser } from '../../Redux/user/user-selectors';
import CartIcon from '../Cart-Icon/cart-icon';
import CartDropdown from '../Cart-Dropdown/cart-dropdown';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionsLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionsLink to='/shop'>
            SHOP
            </OptionsLink>
            <OptionsLink to='/contact'>
            CONTACT
            </OptionsLink>
            {
                currentUser ? (
                <OptionsLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionsLink>
                ) : (
                    <OptionsLink to='/signin'>
                            SIGN IN
                    </OptionsLink>
                )
            }
            <CartIcon/>
        </OptionsContainer>
        { hidden ? null : <CartDropdown/> }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);