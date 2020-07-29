import React, {useState} from 'react';
import Axios from 'axios';
import '../index.css';



// functional component
const FoodItemDelete = ({food}) => {
    
    const deleteFood = async () =>{
        // TODO - need to put this in a central place and pass via props - but doesn't work in Axios?
        const urlWithParam = `http://localhost:5000/foodItem/${food.id}`;
        try{
            console.log('Firing request...');
            console.log(urlWithParam);
            const result = await Axios.delete(urlWithParam);
            console.log('Getting response...');
            console.log(result);
            // TODO refresh the list of foods after one is deleted
        } 
        catch(error){
            console.log(error);
        } 
    }
    
    return (
        <div><button onClick={deleteFood}>Delete Food</button></div>
    )
}

export default FoodItemDelete;