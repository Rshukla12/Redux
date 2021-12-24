import React from "react";
import Calculator from "./Components/Calculator";
import { AppContextProvider } from "./Redux/AppContextProvider";
import { store } from "./Redux/store"
const CalculatorApp = () => {
    return (
        <div>
            <AppContextProvider store={store}>
                <Calculator />
            </AppContextProvider>
        </div>
    )
}

export default CalculatorApp;