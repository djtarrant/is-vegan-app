import React, {useState} from 'react';
import Axios from 'axios';
import '../index.css';



// functional component
const FoodItemAdd = () => {
    
    const addFood = () =>{
        alert("Add food");
    }
    
    return (
        <div><button onClick={addFood}>Add Food</button></div>
    )
}

export default FoodItemAdd;