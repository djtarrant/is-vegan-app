import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav'
import IsVegan from './components/IsVegan'
import FoodItem from './components/FoodItem'
import Category from './components/Category'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Is Vegan App</h1>
        <Nav />
        <Switch>
          <Route path="/" exact strict component={IsVegan} />
          <Route path="/isVegan" exact strict component={IsVegan} />
          <Route path="/foodItem" exact strict component={FoodItem} />
          <Route path="/category" exact strict component={Category} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
