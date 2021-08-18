import logo from '../logo.svg';
import './App.css';
import Products from './Products';
import ProductDetails from './ProductDetails';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    
      <header className="App-header">  
      <div class="w-100">
                <div class="w-100 container">
                    <div class="row">
        
          
          
      <nav className="nav">
        <Link to="/" className="Link">Home</Link>
        <Link to="/products" className="Link">Products</Link>
        </nav> 
        <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
      </Switch>


      
      </div>
                </div>
            </div>
      </header>
      
    </div>
    
    </Router> 
  );
}

export default App;
