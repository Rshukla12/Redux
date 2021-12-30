import { todoConstants } from "./actionTypes";

export const addTodo = ( title ) => ({ 
    type: todoConstants.ADD_TODO , 
    payload: {
        title: title,
        status: false
    }
}); 


export const getTodoRequest = () => ({
    type: todoConstants.GET_TODOS_REQUEST ,
    payload: {
        isLoading: true
    }
});


export const getTodoSuccess = (todos) => ({
    type: todoConstants.GET_TODOS_SUCCESS ,
    payload: {
        task: todos,
        isLoading: false
    }
});


export const getTodoFailure = () => ({
    type: todoConstants.GET_TODOS_FAILURE ,
    payload: {
        isError: true,
        isLoading: false
    }
});


export const addTodoRequest = () => ({
    type: todoConstants.ADD_TODOS_REQUEST ,
    payload: {
        isLoading: true
    }
});


export const addTodoSuccess = () => ({
    type: todoConstants.ADD_TODOS_SUCCESS ,
    payload: {
        isLoading: false
    }
});


export const addTodoFailure = () => ({
    type: todoConstants.ADD_TODOS_FAILURE ,
    payload: {
        isError: true,
        isLoading: false
    }
});

