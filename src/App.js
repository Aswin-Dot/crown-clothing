import './App.css';
import HomePage from './Pages/homepage/homepage.js';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/shop/shopPage';
import Header from './Components/Header/header'

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
