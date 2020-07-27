import React, {useState} from 'react';
import Axios from 'axios';
import '../index.css';
import FoodRow from './FoodRow'
import Alert from './Alert'



// functional component
const IsVegan = () => {

    //React hook for setting state
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState("");
    const url = `http://localhost:5000/isVegan/${query}`;

    const getData = async () =>{
        if(query!==""){
            const result = await Axios.get(url);
            if(result.data.foodItems===[]){
                return setAlert("No food with such name");
            }
            console.log(result);
            // use the hooks to set state
            setData(result.data.foodItems); //JSON output from the API
            setQuery(""); // reset the search term
            setAlert(""); // reset the alert
        }else{
            setAlert("Please fill in the form");
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }

    const onChange = (e) =>{
        setQuery(e.target.value);
    }
    
    
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <label>Food:</label>
                <input type = "text" autoComplete="off" onChange = {onChange} value = {query}/>
                <input type = "submit" value = "Check if it is Vegan" /> 
                {alert!=="" && <Alert alert={alert} />} 
            </form>
            
            
            {
            data !== [] &&  // if data is not empty, display the table
            (
            <div>
                <h2>List Foods</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Is Vegan?</th>
                            <th>Manage</th>
                            <th>Caveats</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        // if data is not empty execute the map function
                        data !== [] && data.map(food =>
                            <FoodRow key={food.id} food={food} />
                        )
                    }
                    </tbody>
                </table>
            </div>
            )
            }
            
        </div>
    )
}

export default IsVegan;

