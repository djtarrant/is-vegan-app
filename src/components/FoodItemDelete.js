import React from 'react';
import Axios from 'axios';
import '../index.css';



// functional component
const FoodItemDelete = (props) => {
    const {food, refreshList, url} = props;
    const refresh = () => {
        refreshList();
    }
    
    const deleteFood = async () =>{

        //const urlWithParam = `http://localhost:5000/foodItem/${food.id}`;
        const urlWithParam = `${url}${food.id}`;
        try{
            console.log('Firing request...');
            console.log(urlWithParam);
            const result = await Axios.delete(urlWithParam);
            console.log('Getting response...');
            console.log(result);
            refresh(); // refresh the list of foods after one is deleted
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