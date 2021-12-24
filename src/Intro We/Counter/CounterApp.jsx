import React from "react";
import { decrementCounter, incrementCounter } from "../Redux/action";
import { AppContext } from "../Redux/AppContextProvider";

const Counter = () => {
    const { getState, dispatch }  = React.useContext(AppContext)[1];
    const { count } = getState();
    const handleIncrement = () => {
        dispatch( incrementCounter(1) );
    };

    const handleDecrement = () => {
        dispatch( decrementCounter(1) );
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increase</button>
            <button onClick={handleDecrement}>Decrease</button>
        </div>
    )
}

export default Counter;