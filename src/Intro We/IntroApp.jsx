import CounterApp from "./Counter/CounterApp";
import { AppContextProvider } from "./Redux/AppContextProvider";
import { store, todoStore } from "./Redux/store";
import Todo from "./Todo/Todo";

const IntroApp = () => {  
    return (
        <div>
            <AppContextProvider store={store}>
                <h1>Counter</h1>
                <CounterApp />
            </AppContextProvider>
            <AppContextProvider store={todoStore}>
                <Todo />
            </AppContextProvider>
        </div>
    )
}

export default IntroApp;