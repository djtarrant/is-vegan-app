import React, {useState} from 'react';
import Axios from 'axios';
import '../index.css';



// functional component
const FoodItemAdd = ({refreshList}) => {

    const refresh = (props) => {
        refreshList();
    }

    //TODO - need to put this in a central place and pass via props - but doesn't work in Axios?
    const url = `http://localhost:5000/foodItem/`;
    const [addFoodShow, setAddFoodShow] = useState(false); //to show the add food form
    //const [name, setName] = useState("");
    //const [caveats, setCaveats] = useState("");
    const [isVegan, setIsVegan] = useState(""); 
    let BooleanIsVegan = "";
    const [state, setState] = useState({
        name: "",
        categoryId: "",
        caveats: ""
    })

    const showForm = () =>{
        setAddFoodShow(!addFoodShow);
    }
    function handleChange(e){
        const value = e.target.value;
        setState({
            ...state, //spreading - merging original state to new one
            [e.target.name]: value
        })
    }
    const changeIsVegan = (e) =>{
        //select boxes only store numbers or strings in jsx
        setIsVegan(parseInt(e.target.value));
    }
    /*
    const changeName = (e) =>{
        setName(e.target.value);
    }
    const changeCaveats = (e) =>{
        setCaveats(e.target.value);
    }
    */


    const addFood = async (e) =>{
        e.preventDefault();
        if(isVegan===1){
            BooleanIsVegan=true;
            console.log('here1');
        }else if(isVegan===0){
            BooleanIsVegan=false;
            console.log('here2');
        }else{
            BooleanIsVegan="";
            console.log('here3');
        }
        var params = {
            "name":state.name, 
            "isVegan":BooleanIsVegan, 
            "caveats":state.caveats, 
            "categoryId":state.categoryId, 
            "isApprovedItem":true, 
            "isApprovedData":true
        };
        try{
            console.log('Firing request...');
            console.log(url);
            const result = await Axios.post(url, params);
            console.log('Getting response...');
            console.log(result);
            refresh();
            showForm();
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
                        <label htmlFor='name'>Name</label>
                        <input type = "text" name = "name" id = "name" value={state.name} onChange={handleChange}></input>
                        <label htmlFor='categoryId'>Category</label>
                        <input type = "text" name = "categoryId" id = "categoryId" value={state.categoryId} onChange={handleChange}></input>
                        <label htmlFor='isVegan'>Vegan?</label>
                        <select name = "isVegan" id = "isVegan" value={isVegan} onChange={changeIsVegan}>
                        <option value = "">Choose</option>
                            <option value = "1">Yes</option>
                            <option value = "0">No</option>
                        </select>
                        <label htmlFor='caveats'>Caveats</label>
                        <input type = "text" name = "caveats" id = "caveats"  value={state.caveats} onChange={handleChange}></input>
                        <button>Add</button>
                    </form>    
                </div>
            )}
        </div>
    )
}

export default FoodItemAdd;