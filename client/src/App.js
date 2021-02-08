import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './Redux/user/user-selectors';
import { checkUserSession } from './Redux/user/user-action'

import ShopPage from './Pages/shop/shopPage';
import Header from './Components/Header/header';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import HomePage from './Pages/homepage/homepage.js';
import CheckoutPage from "./Pages/checkout/checkout";
import Backdrop from './Components/Backdrop/backdrop';
import './App.css';

const App = ({ checkUserSession, currentUser }) => {

  // const unSubscribeFromAuth = null

  useEffect(() => {
    checkUserSession();

    //   // addCollectionAndDocument(
    //   //   'collections', 
    //   //   collectionsArray.map(({ title, items }) => ({ title, items })))
  }, [checkUserSession])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route 
          exact  
          path='/signin' 
          render={() => 
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInAndSignUpPage/>
            )
          }/>
      </Switch>
      <Backdrop/>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
