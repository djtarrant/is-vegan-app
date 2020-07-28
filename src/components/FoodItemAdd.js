import React, {useState} from 'react';
import Axios from 'axios';
import '../index.css';



// functional component
const FoodItemAdd = (url) => {

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
        setIsVegan(e.target.selected);
    }
    const changeCaveats = (e) =>{
        setCaveats(e.target.value);
    }
    const addFood = () =>{
        console.log(url);
        Axios.post(url,{
            name: name,
            isVegan: isVegan,
            caveats: caveats
        }).then((response) =>{
            console.log(response);
        })        
    }
    
    return (
        <div>
            <button onClick={showForm}>Add Food</button>
            {addFoodShow && (
                <div>
                    <form>
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
                        <button onSubmit={addFood}>Add</button>
                    </form>    
                </div>
            )}
        </div>
    )
}

export default FoodItemAdd;