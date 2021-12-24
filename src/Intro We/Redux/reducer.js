import constants, { todoConstants } from "./actionTypes"

export const reducer = ( state, action ) => {
    switch(action.type) {
      case constants.INCREMENT_COUNTER : {
        return {
          ...state,
          count: state.count + action.payload
        }
      }
      case constants.DECREMENT_COUNTER : {
        return {
          ...state,
          count: state.count - action.payload
        }
      }
      default:
        return state
    }
}


export const todoReducer = ( state, action ) => {
    switch(action.type) {
        case todoConstants.ADD_TODO : {
            return {
                ...state,
                task: [ ...state.task, action.payload]
            }
        }
        
        default:
            return state
    }
}