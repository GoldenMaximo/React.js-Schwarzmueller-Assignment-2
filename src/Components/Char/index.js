import React from 'react';
import './index.css';

const Char = props => {
    return (
        <div className="char" onClick={props.onClick}>
            <p>{props.children}</p>
        </div>
    );
}

export default Char;