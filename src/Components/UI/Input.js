import React from 'react';

import classes from './Input.module.css';

// The input component is wrap with forwardRef with ref as argument to "input" and forward to the component it is use. 
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            
            {/*...spread operator convert the input type:text object,into type="text" */}
            <input ref={ref} {...props.input}/>
        </div>
    );

});

export default Input;