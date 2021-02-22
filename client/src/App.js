import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './Redux/user/user-selectors';
import { checkUserSession } from './Redux/user/user-action'

import Spinner from './Components/Spinner/spinner'
import Header from './Components/Header/header';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import Backdrop from './Components/Backdrop/backdrop';
import ErrorBoundary from './Components/Error-boundary/error-boundary'
import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./Pages/homepage/homepage.js')) ;
const ShopPage = lazy(() => import('./Pages/shop/shopPage'));
const CheckoutPage = lazy(() => import('./Pages/checkout/checkout'));


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
      <GlobalStyle/>
      <Header/>
      <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </ErrorBoundary>
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
