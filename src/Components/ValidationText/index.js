import React from 'react';
import './index.css';

const Validation = props => {
    if (props.textLength > 5) {
        return <h1>Text long enough</h1>
    }
    return <h1>Text too short</h1>
};

export default Validation;