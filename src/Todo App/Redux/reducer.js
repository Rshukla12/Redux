import { todoConstants } from "./actionTypes";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case todoConstants.ADD_TODO: {
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    }

    case todoConstants.TOGGLE_TASK_STATUS: {
      return {
        ...state,
        task: state.task.map( t => ({
            ...t,
            status: t.id === action.payload.id ? !t.status : t.status
          }) )
      }
    }

    case todoConstants.DELETE_TODO : {
      return {
        ...state,
        task: state.task.filter( t => t.id !== action.payload.id )
      }
    }

    default:
      return state;
  }
};
