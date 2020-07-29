import React, {useState} from 'react';
import Axios from 'axios';
import '../index.css';



// functional component
const FoodItemEdit = ({food}) => {
        //TODO - need to put this in a central place and pass via props - but doesn't work in Axios?
        const url = `http://localhost:5000/foodItem/${food.id}`;
        const [editFoodShow, setEditFoodShow] = useState(false); //to show the add food form
        const [name, setName] = useState(food.name);
        const [isVegan, setIsVegan] = useState(food.isVegan);
        const [caveats, setCaveats] = useState(food.caveats); 
    
        const showForm = () =>{
            setEditFoodShow(!editFoodShow);
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
        const editFood = async (e) =>{
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
                const result = await Axios.put(url, params);
                console.log('Getting response...');
                console.log(result);
                // TODO refresh the list of foods after one is edited
            } 
            catch(error){
                console.log(error);
            }        
        }
        
        return (
            <div>
                <button onClick={showForm}>Edit Food</button>
                {editFoodShow && (
                    <div>
                        <form onSubmit={editFood}>
                            <label>Name</label><br/>
                            <input type = "text" name = "name" id = "name" value={name} onChange={changeName}></input><br/>
                            <label>Category</label><br/>
                            <input type = "text" name = "category" id = "category"></input><br/>
                            <label>Vegan?</label><br/>
                            <select name = "isVegan" id = "isVegan" value={isVegan} onChange={changeIsVegan}>
                                <option value = "1">Yes</option>
                                <option value = "0">No</option>
                            </select><br/>
                            <label>Caveats</label><br/>
                            <input type = "text" name = "caveats" id = "caveats"  value={caveats} onChange={changeCaveats}></input><br/>
                            <button>Edit</button><br/>
                        </form>    
                    </div>
                )}
            </div>
        )
}

export default FoodItemEdit;