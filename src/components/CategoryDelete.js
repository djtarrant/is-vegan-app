import React from 'react';
import Axios from 'axios';
import '../index.css';



// functional component
const CategoryDelete = (props) => {
    const {category, refreshList, url} = props;
    const refresh = () => {
        refreshList();
    }
    
    const deleteCategory = async () =>{

        //const urlWithParam = `http://localhost:5000/foodItem/${food.id}`;
        const urlWithParam = `${url}${category.id}`;
        try{
            console.log('Firing request...');
            console.log(urlWithParam);
            const result = await Axios.delete(urlWithParam);
            console.log('Getting response...');
            console.log(result);
            refresh(); // refresh the list of categories after one is deleted
        } 
        catch(error){
            console.log(error);
        } 
    }
    
    return (
        <div><button onClick={deleteCategory}  className="delete">Delete Category</button></div>
    )
}

export default CategoryDelete;