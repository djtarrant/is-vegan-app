import React, {useState, useEffect} from 'react';
import '../index.css';
import FoodItemAdd from './FoodItemAdd';
import FoodRow from './FoodRow';



// functional component
const FoodItem = () => {
    const [data, setData] = useState([]); //functional component hook
    const url = `http://localhost:5000/foodItem/`;

    useEffect(() => {
        
    })
    
    const getData = () => {
        console.log(url);
        fetch(url)
        .then((response) => {
            // Add this check and throw an error if it fails
            //console.log(response);
            if (!response.ok) {
                throw Error(`There was an error: ${response.statusText}`);
            }
            return response.json();
        })
        .then((response) => {
            console.log(response);
            setData(response.foodItems); //JSON output from the API
        })
        .catch((error) => console.log(error));
    }

    return (
        <div>
            <h1>Food Item</h1>
            <button onClick={getData}>Get Food Data</button><br/>
            <FoodItemAdd url={url} refreshList={getData} />
            {
                    // if data is not empty show the table
                    data !== [] && 
                        (<div>
                            <h2>List Foods</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Is Vegan?</th>
                                        <th>Manage</th>
                                        <th>Caveats</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    // if data is not empty execute the map function
                                    data !== [] && data.map(food =>
                                        <FoodRow key={food.id} food={food} url={url} />
                                    )
                                }
                                </tbody>
                            </table>
                        </div>)
            }
        </div>
    )
}

export default FoodItem;