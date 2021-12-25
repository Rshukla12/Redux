import { todoConstants } from "./actionTypes";
import { v4 as uuid } from "uuid";

export const addTodo = ( title ) => ({ 
    type: todoConstants.ADD_TODO , 
    payload: {
        title: title,
        status: false,
        id: uuid()
    }
}); 

export const toggleTask = ( id ) => ({ 
    type: todoConstants.TOGGLE_TASK_STATUS , 
    payload: {
        id
    }
}); 

export const deleteTodo = ( id ) => ({ 
    type: todoConstants.DELETE_TODO , 
    payload: {
        id
    }
}); 
