import React, {useState} from 'react';
import '../index.css';
import Caveats from './Caveats';
import FoodItemEdit from './FoodItemEdit';
import FoodItemDelete from './FoodItemDelete';

const FoodRow = ({food}) => {
    const [show, setShow] = useState(false);
    const { name, isVegan, caveats, category } = food;
    return (
        <tr>
            <td>{name}</td>
            <td>{category}</td>
            <td>{isVegan? 'Yes':'No'}</td>>
            <td>    
                <button onClick={()=>setShow(!show)}>Caveats</button>
                {show && <Caveats caveats={caveats} />}
            </td>
            <td>
                <FoodItemEdit food={food} />
                <FoodItemDelete food={food} />
            </td> 
        </tr>
    )
}

export default FoodRow;