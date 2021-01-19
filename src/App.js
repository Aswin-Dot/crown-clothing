import React, { Component } from 'react';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './Redux/user/user-action';
import { selectCurrentUser } from './Redux/user/user-selectors';
import ShopPage from './Pages/shop/shopPage';
import Header from './Components/Header/header';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import HomePage from './Pages/homepage/homepage.js';
import CheckoutPage from "./Pages/checkout/checkout"
import './App.css';

class App extends Component {

  unSubscribeFromAuth = null

  componentDidMount()  {

    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
          // console.log(this.state);
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render(){
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
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage/>
              )
            }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
