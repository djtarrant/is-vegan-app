import React, {useState} from 'react';
import Axios from 'axios';
import '../index.css';



// functional component
const FoodItemEdit = (props) => {

    const {food, refreshList, url} = props;
    const refresh = () => {
        refreshList();
    }

    const editUrl = `${url}${food.id}`;
    //console.log(typeof(url), url, food.id);
    const [editFoodShow, setEditFoodShow] = useState(false); //to show the add food form
    let NumericIsVegan = null;
    let BooleanIsVegan = food.isVegan;
    if(food.isVegan===true){
        NumericIsVegan=1;
        console.log('here1 initial');
    }else{
        NumericIsVegan=0;
        console.log('here2 initial');
    }
    const [isVegan, setIsVegan] = useState(NumericIsVegan);
    console.log('isVegan:',typeof(isVegan), isVegan);

    //const [name, setName] = useState(food.name);
    //const [categoryId, setCategoryId] = useState(food.categoryId);
    //const [caveats, setCaveats] = useState(food.caveats);
    const [state, setState] = useState({
        name: food.name,
        categoryId: food.categoryId,
        caveats: food.caveats
    })

    const showForm = () =>{
        setEditFoodShow(!editFoodShow);
    }
    const changeIsVegan = (e) =>{
        //select boxes only store numbers or strings in jsx
        setIsVegan(parseInt(e.target.value));
    }

    function handleChange(e){
        const value = e.target.value;
        setState({
            ...state, //spreading - merging original state to new one
            [e.target.name]: value
        })
    }
    /*
    const changeName = (e) =>{
        setName(e.target.value);
    }
    const changeCaveats = (e) =>{
        setCaveats(e.target.value);
    }
    const changeCategoryId = (e) =>{
        setCategoryId(e.target.value);
    }
    */

    const editFood = async (e) =>{
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
        console.log('Firing:',typeof(BooleanIsVegan),BooleanIsVegan);
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
            console.log(editUrl);
            const result = await Axios.put(editUrl, params);
            console.log('Getting response...');
            console.log(result);
            refresh(); // refresh the list of foods after one is edited
        } 
        catch(error){
            console.log(error);
        }        
    }
    
    return (
        <div>
            <button onClick={showForm}  className="edit">Edit Food</button>
            {editFoodShow && (
                <div  className="editFood">
                    <h2>Edit Food</h2>
                    <form onSubmit={editFood}>
                        <label htmlFor='name'>Name</label>
                        <input type = "text" name = "name" id = "name" value={state.name} onChange={handleChange}></input>
                        <label htmlFor='categoryId'>Category</label>
                        <input type = "text" name = "categoryId" id = "categoryId" value={state.categoryId} onChange={handleChange}></input>
                        <label htmlFor='isVegan'>Vegan?</label>
                        <select name = "isVegan" id = "isVegan" value={isVegan} onChange={changeIsVegan}>
                            <option value = "1">Yes</option>
                            <option value = "0">No</option>
                        </select>
                        <label htmlFor='caveats'>Caveats</label>
                        <textarea name = "caveats" id = "caveats" onChange={handleChange}>{state.caveats}</textarea>
                        <button>Edit</button>
                    </form>    
                </div>
            )}
        </div>
    )
}

export default FoodItemEdit;