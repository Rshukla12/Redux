import constants from "./actionsType";

const reducer = ( state, action ) => {
    switch (action.type){
        case ( constants.ADD_TODO_REQUEST ): {
            return {
                ...state,
                isLoading: true
            }
        }

        case ( constants.ADD_TODO_SUCCESS ): {
            return {
                ...state,
                isLoading: false
            }
        }

        case ( constants.ADD_TODO_FAILURE ): {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case ( constants.GET_TODO_REQUEST ): {
            return {
                ...state,
                isLoading: true
            }
        }

        case ( constants.GET_TODO_SUCCESS ): {
            return {
                ...state,
                isLoading: false,
                todos: action.payload.todo
            }
        }

        case ( constants.GET_TODO_FAILURE ): {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case ( constants.TOGGLE_TASK_REQUEST ): {
            return {
                ...state,
                isLoading: true
            }
        }

        case ( constants.TOGGLE_TASK_SUCCESS ): {
            return {
                ...state,
                isLoading: false
            }
        }

        case ( constants.TOGGLE_TASK_FAILURE ): {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        
        case ( constants.DELETE_TASK_REQUEST ): {
            return {
                ...state,
                isLoading: true
            }
        }

        case ( constants.DELETE_TASK_SUCCESS ): {
            return {
                ...state,
                isLoading: false
            }
        }

        case ( constants.DELETE_TASK_FAILURE ): {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }


        case ( constants.GET_TASK_REQUEST ): {
            return {
                ...state,
                isLoading: true
            }
        }

        case ( constants.GET_TASK_SUCCESS ): {
            return {
                ...state,
                isLoading: false,
                task: action.payload.task
            }
        }

        case ( constants.GET_TASK_FAILURE ): {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        
        default: {
            return state;
        }
    }    
}

export default reducer;