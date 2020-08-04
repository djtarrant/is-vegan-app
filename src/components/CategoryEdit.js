import React, {useState} from 'react';
import Axios from 'axios';
import '../index.css';



// functional component
const CategoryEdit = (props) => {

    const {category, refreshList, url} = props;
    const refresh = () => {
        refreshList();
    }

    const editUrl = `${url}${category.id}`;
    const [editCategoryShow, setEditCategoryShow] = useState(false); //to show the add food form
    //const [name, setName] = useState(food.name);
    const [state, setState] = useState({
        name: category.name
    })

    const showForm = () =>{
        setEditCategoryShow(!editCategoryShow);
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
    */

    const editCategory = async (e) =>{
        e.preventDefault();
        var params = {
            "name":state.name
        };
        try{
            console.log('Firing request...');
            console.log(editUrl);
            const result = await Axios.put(editUrl, params);
            console.log('Getting response...');
            console.log(result);
            refresh(); // refresh the list of categories after one is edited
        } 
        catch(error){
            console.log(error);
        }        
    }
    
    return (
        <div>
            <button onClick={showForm}  className="edit">Edit Category</button>
            {editCategoryShow && (
                <div  className="editCategory">
                    <h2>Edit Category</h2>
                    <form onSubmit={editCategory}>
                        <label htmlFor='name'>Name</label>
                        <input type = "text" name = "name" id = "name" value={state.name} onChange={handleChange}></input>
                        <button>Edit</button>
                    </form>    
                </div>
            )}
        </div>
    )
}

export default CategoryEdit;