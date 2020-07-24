import React, {useState} from 'react';
import Axios from 'axios';
import '../index.css';
import FoodItemAdd from './FoodItemAdd';




// functional component
const FoodItem = () => {
    
    
    // TODO - get the foodList
    const url = `http://localhost:5000/foodItem/`;
    
    return (
        <div>
            <h1>Food Item</h1>
            <FoodItemAdd />
            <h2>List Foods</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Is Vegan?</th>
                    <th>Caveats</th>
                    <th>Manage</th>
                </tr>
                {
                    // if data is not empty execute the map function
                    //data !== [] && data.map(food =>
                        //<FoodRow key={food.id} food={food} />
                    //)
                }
            </table>
        </div>
    )
}

export default FoodItem;