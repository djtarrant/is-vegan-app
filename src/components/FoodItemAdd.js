import React, {useState} from 'react';
import Axios from 'axios';
import '../index.css';



// functional component
const FoodItemAdd = () => {
    //TODO - need to put this in a central place and pass via props - but doesn't work in Axios?
    const url = `http://localhost:5000/foodItem/`;
    const [addFoodShow, setAddFoodShow] = useState(false); //to show the add food form
    const [name, setName] = useState("");
    const [isVegan, setIsVegan] = useState("");
    const [caveats, setCaveats] = useState(""); 

    const showForm = () =>{
        setAddFoodShow(!addFoodShow);
    }

    // TODO need to work out how to consolidate these functions
    const changeName = (e) =>{
        setName(e.target.value);
    }
    const changeIsVegan = (e) =>{
        const isVegan = e.target.value? true: false;
        setIsVegan(isVegan);
    }
    const changeCaveats = (e) =>{
        setCaveats(e.target.value);
    }
    const addFood = async (e) =>{
        e.preventDefault();
        var params = {
            "name":name, 
            "isVegan":isVegan, 
            "caveats":caveats, 
            "categoryId":"1", 
            "isApprovedItem":true, 
            "isApprovedData":true
        };
        try{
            console.log('Firing request...');
            console.log(url);
            const result = await Axios.post(url, params);
            console.log('Getting response...');
            console.log(result);
        } 
        catch(error){
            console.log(error);
        }        
    }
    
    return (
        <div>
            <button onClick={showForm}>Add Food</button>
            {addFoodShow && (
                <div>
                    <form onSubmit={addFood}>
                        <label>Name</label>
                        <input type = "text" name = "name" id = "name" value={name} onChange={changeName}></input>
                        <label>Category</label>
                        <input type = "text" name = "category" id = "category"></input>
                        <label>Vegan?</label>
                        <select name = "isVegan" id = "isVegan" value={isVegan} onChange={changeIsVegan}>
                            <option value = "1">Yes</option>
                            <option value = "0">No</option>
                        </select>
                        <label>Caveats</label>
                        <input type = "text" name = "caveats" id = "caveats"  value={caveats} onChange={changeCaveats}></input>
                        <button>Add</button>
                    </form>    
                </div>
            )}
        </div>
    )
}

export default FoodItemAdd;