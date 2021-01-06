import './App.css';
import HomePage from './Pages/homepage/homepage.js';
import { Route } from 'react-router-dom';
import ShopPage from './Pages/shop/shopPage'

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
