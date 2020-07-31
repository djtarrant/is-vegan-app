import React, {useState} from 'react';
import '../index.css';
import Caveats from './Caveats';
import FoodItemEdit from './FoodItemEdit';
import FoodItemDelete from './FoodItemDelete';

const FoodRow = (props) => {
    const [show, setShow] = useState(false);
    const {food, refreshList, url} = props;
    const { name, isVegan, caveats, categoryId } = food;
    

    return (
        <tr>
            <td>{name}</td>
            <td>{categoryId}</td>
            <td>{isVegan? 'Yes':'No'}</td>
            <td>
                <FoodItemEdit food={food} url={url} refreshList={refreshList} />
                <FoodItemDelete food={food} url={url} refreshList={refreshList} />
            </td>
            <td>    
                <button onClick={()=>setShow(!show)}>Caveats</button>
                {show && <Caveats caveats={caveats} />}
            </td> 
        </tr>
    )
}

export default FoodRow;