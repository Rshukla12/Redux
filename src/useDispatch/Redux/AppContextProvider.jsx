import React, { useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext = React.createContext();

export const AppContextProvider = ({children}) => {
  const initialState = {
    task: [],
    isLoading: true,
    isError: false
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[ state, dispatch ]} >
      { children }
    </AppContext.Provider>
  );
};