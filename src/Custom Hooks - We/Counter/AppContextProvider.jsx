import React, { useReducer } from "react"
import { reducer } from "./reducer"

export const AppContext = React.createContext()

const AppContextProvider = ({ children }) => {
    const [counter, dispatch] = useReducer(reducer, { counter: 10 })

    return (
        <AppContext.Provider value={[counter, dispatch]}>
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider;