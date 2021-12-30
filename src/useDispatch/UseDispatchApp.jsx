import Todo from "./Components/Todo";
import { AppContextProvider } from "./Redux/AppContextProvider";

const UseDispatchApp = () => {
    return(
        <AppContextProvider>
            <Todo />
        </AppContextProvider>
    )
};
export default UseDispatchApp;