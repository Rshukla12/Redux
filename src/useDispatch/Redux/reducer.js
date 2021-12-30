import { todoConstants } from "./actionTypes"

export const reducer = ( state, action ) => {
    switch(action.type) {
        case todoConstants.ADD_TODOS_REQUEST : {
          return {
              ...state,
              isLoading: true
          }
        }
    
        case todoConstants.ADD_TODOS_SUCCESS : {
          return {
              ...state,
              isLoading: false
          }
        }

        case todoConstants.ADD_TODOS_FAILURE : {
          return {
              ...state,
              isLoading: false,
              isError: true
          }
        }
      

        case todoConstants.GET_TODOS_REQUEST : {
          return {
            ...state,
            isLoading: true
          }
        }

        case todoConstants.GET_TODOS_SUCCESS : {
          return {
            ...state,
            isLoading: false,
            task: action.payload.task
          }
        }

        case todoConstants.GET_TODOS_FAILURE : {
          return {
            ...state,
            isLoading: false,
            isError: true
          }
        }

        default:
          return state
    }
}