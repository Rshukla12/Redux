import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../Redux/action";

const Counter = () => {
    const { count }  = useSelector(state=>state, shallowEqual);
    const dispatch = useDispatch()

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