import React, {useState} from 'react';
import '../index.css';

const Caveats = ({caveats}) => {
    return (
        <div className={caveats}>
            {caveats}
        </div>
    )
}

export default Caveats;