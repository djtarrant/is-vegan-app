import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import IsVegan from './components/IsVegan'
import FoodItem from './components/FoodItem'
import Category from './components/Category'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Is Vegan App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/foodItem">Food</Link></li>
          <li><Link to="/category">Categories</Link></li>
        </ul>
        <Switch>
          <Route path="/isVegan" exact component={IsVegan} />
          <Route path="/foodItem" exact component={FoodItem} />
          <Route path="/category" exact component={Category} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
