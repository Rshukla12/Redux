import constants from "./actionsType"

export const getTodoRequest = () => ({
    type: constants.GET_TODO_REQUEST,
    payload: {
        isLoading: true
    }
});

export const getTodoSuccess = (res) => ({
    type: constants.GET_TODO_SUCCESS,
    payload: {
        isLoading: false,
        todo: res
    }
});

export const getTodoFailure = () => ({
    type: constants.GET_TODO_FAILURE,
    payload: {
        isLoading: false,
        isError: true
    }
});

export const addTodoRequest = () => ({
    type: constants.ADD_TODO_REQUEST,
    payload: {
        isLoading: true
    }
});

export const addTodoSuccess = () => ({
    type: constants.ADD_TODO_SUCCESS,
    payload: {
        isLoading: false
    }
});

export const addTodoFailure = () => ({
    type: constants.ADD_TODO_FAILURE,
    payload: {
        isLoading: false,
        isError: true
    }
});

export const toggleTaskRequest = () => ({
    type: constants.DELETE_TASK_REQUEST,
    payload: {
        isLoading: true
    }
});

export const toggleTaskSuccess = () => ({
    type: constants.DELETE_TASK_SUCCESS,
    payload: {
        isLoading: false
    }
});

export const toggleTaskFailure = () => ({
    type: constants.DELETE_TASK_FAILURE,
    payload: {
        isLoading: false,
        isError: true
    }
});

export const deleteTaskRequest = () => ({
    type: constants.DELETE_TASK_REQUEST,
    payload: {
        isLoading: true
    }
});

export const deleteTaskSuccess = () => ({
    type: constants.DELETE_TASK_SUCCESS,
    payload: {
        isLoading: false
    }
});

export const deleteTaskFailure = () => ({
    type: constants.DELETE_TASK_FAILURE,
    payload: {
        isLoading: false,
        isError: true
    }
});

export const getTaskRequest = () => ({
    type: constants.GET_TASK_REQUEST,
    payload: {
        isLoading: true
    }
});

export const getTaskSuccess = (res) => ({
    type: constants.GET_TASK_SUCCESS,
    payload: {
        isLoading: false,
        task: res
    }
});

export const getTaskFailure = () => ({
    type: constants.GET_TASK_FAILURE,
    payload: {
        isLoading: false,
        isError: true
    }
});

