import React from 'react';
import '../index.css';

const Alert = ({alert}) => {
    return (
        <div className="alert">
            {alert}
        </div>
    )
}

export default Alert;