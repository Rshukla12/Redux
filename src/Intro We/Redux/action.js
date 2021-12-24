import constants, { todoConstants } from "./actionTypes";

export const incrementCounter = ( amount ) => ({ 
    type: constants.INCREMENT_COUNTER, 
    payload: amount
}); 

export const decrementCounter = ( amount ) => ({ 
    type: constants.DECREMENT_COUNTER, 
    payload: amount
}); 


export const addTodo = ( title ) => ({ 
    type: todoConstants.ADD_TODO , 
    payload: {
        title: title,
        status: false
    }
}); 

