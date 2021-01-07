import React, { Component } from 'react';
import './App.css';
import HomePage from './Pages/homepage/homepage.js';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/shop/shopPage';
import Header from './Components/Header/header';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import { auth } from './Firebase/firebase.utils'

class App extends Component {

  state ={
    currentUser: null
  }

  unSubscribeFromAuth = null

  componentDidMount()  {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
