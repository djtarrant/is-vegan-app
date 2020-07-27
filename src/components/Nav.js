import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';



// functional component
const Nav = () => {
    
    
    return (
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/foodItem">Food</Link></li>
          <li><Link to="/category">Categories</Link></li>
          <li><Link to="/isVegan">Is Vegan</Link></li>
        </ul>
    )
}

export default Nav;