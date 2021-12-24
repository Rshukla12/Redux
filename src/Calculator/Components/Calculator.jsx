import React from "react";
import { useState } from "react";
import { AppContext } from "../Redux/AppContextProvider";
import { decrementValue, divideValue, incrementValue, multiplyValue } from "../Redux/action";

const Calculator = () => {
    const [value, setValue] = useState(0);
    const { getState, dispatch }  = React.useContext(AppContext)[1];
    const { count } = getState();
    
    console.log(count)

    const handleIncrement = () => {
        dispatch( incrementValue(1) );
    };

    const handleDecrement = () => {
        dispatch( decrementValue(1) );
    };

    const handleClick = (e) => {
        const name = e.target.name;
        let action = null;
        if ( name === "add" ){
            action = incrementValue(value)
        } else if ( name === "sub" ) {
            action = decrementValue(value)            
        } else if ( name === "mul" ) {
            action = multiplyValue(value)            
        } else if ( name === "div" ) {
            action = divideValue(value)            
        } else {
            return;
        }
        setValue(0);
        dispatch( action );
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <input type="number" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={handleClick} name="add">Add</button>
            <button onClick={handleClick} name="sub">Subtract</button>
            <button onClick={handleClick} name="mul">Multiply</button>
            <button onClick={handleClick} name="div">Divide</button>
        </div>
    )
}

export default Calculator;