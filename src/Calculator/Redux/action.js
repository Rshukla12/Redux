import constants from "./actionTypes";

export const incrementValue = ( amount ) => ({ 
    type: constants.INCREMENT_VALUE, 
    payload: amount
}); 

export const decrementValue = ( amount ) => ({ 
    type: constants.DECREMENT_VALUE, 
    payload: amount
}); 

export const multiplyValue = ( amount ) => ({ 
    type: constants.MULTIPLY_VALUE, 
    payload: amount
}); 

export const divideValue = ( amount ) => ({ 
    type: constants.DIVIDE_VALUE, 
    payload: amount
}); 