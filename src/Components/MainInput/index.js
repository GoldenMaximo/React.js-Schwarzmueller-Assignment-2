import React from 'react';
import './index.css';

const MainInput = props => {
    return (
        <>
            <input value={props.value} onChange={props.onChange} />
        </>
    );
};

export default MainInput;