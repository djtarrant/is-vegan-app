import React, {useState} from 'react';
import Axios from 'axios';
import '../index.css';



// functional component
const CategoryAdd = (props) => {

    const {refreshList, url} = props;
    const refresh = () => {
        refreshList();
    }
    const [addCategoryShow, setAddCategoryShow] = useState(false); //to show the add Category form
    const showForm = () =>{
        setAddCategoryShow(!addCategoryShow);
    }
    const [state, setState] = useState({
        name: ""
    })
    function handleChange(e){
        const value = e.target.value;
        setState({
            ...state, //spreading - merging original state to new one
            [e.target.name]: value
        })
    }
    const addCategory = async (e) =>{
        e.preventDefault();
        var params = {
            "name":state.name, 
            };
        try{
            console.log('Firing request...');
            console.log(url);
            const result = await Axios.post(url, params);
            console.log('Getting response...');
            console.log(result);
            refresh(); // refresh the food list
            showForm();// hide the add form
        } 
        catch(error){
            console.log(error);
        }        
    }
    
    return (
        <div>
            <button onClick={showForm}  className="add">Add Category</button>
            {addCategoryShow && (
                <div className="addCategory">
                    <h2>Add Category</h2>
                    <form onSubmit={addCategory}>
                        <label htmlFor='name'>Name</label>
                        <input type = "text" name = "name" id = "name" value={state.name} onChange={handleChange}></input>
                        <button>Add</button>
                    </form>    
                </div>
            )}
        </div>
    )
}

export default CategoryAdd;