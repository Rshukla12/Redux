import Todo from "./Components/Todo";
import { AppContextProvider } from "./Redux/AppContextProvider";

const UseReducerApp = () => {
    return(
        <AppContextProvider>
            <Todo />
        </AppContextProvider>
    )
};
export default UseReducerApp;