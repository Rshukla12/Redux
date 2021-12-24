import constants from "./actionTypes"

export const reducer = ( state, action ) => {
    switch(action.type) {
      case constants.INCREMENT_VALUE : {
        return {
          ...state,
          count: Number(state.count) + Number(action.payload)
        }
      }
      case constants.DECREMENT_VALUE : {
        return {
          ...state,
          count: state.count - action.payload
        }
      }
      case constants.MULTIPLY_VALUE : {
        return {
          ...state,
          count: state.count * action.payload
        }
      }
    
      case constants.DIVIDE_VALUE : {
        if ( action.payload === 0 ) return state; 
        return {
          ...state,
          count: state.count / action.payload
        }
      }

      default:
        return state
    }
}