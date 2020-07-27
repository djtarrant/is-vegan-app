import React, {useState} from 'react';
import Axios from 'axios';
import '../index.css';



// functional component
const FoodItemAdd = () => {
    const [addFoodShow, setAddFoodShow] = useState(false); //to show the add food form

    const showForm = () =>{
        setAddFoodShow(!addFoodShow);
    }
    
    return (
        <div>
            <button onClick={showForm}>Add Food</button>
            {addFoodShow && (
                <div>
                    <form>
                        <label>Name</label>
                        <input type = "text" name = "name" id = "name"></input>
                        <label>Category</label>
                        <input type = "text" name = "category" id = "category"></input>
                        <label>Name</label>
                        <select name = "isVegan" id = "isVegan">
                            <option value = "1">Yes</option>
                            <option value = "0">No</option>
                        </select>
                        <label>Caveats</label>
                        <input type = "text" name = "caveats" id = "caveats"></input>
                        <button>Add</button>
                    </form>    
                </div>
            )}
        </div>
    )
}

export default FoodItemAdd;