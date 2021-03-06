import React, {useState} from 'react';
import '../index.css';
import Caveats from './Caveats'

const Food = ({food}) => {
    const [show, setShow] = useState(false);
    const { name, isVegan, caveats } = food;
    return (
        <div>
            <h2>{name}</h2>
            Is it vegan? {isVegan? 'Yes':'No'} <br/>
            <button onClick={()=>setShow(!show)}>Caveats</button>
            {show && <Caveats caveats={caveats} />} 
        </div>
    )
}

export default Food;