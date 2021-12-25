import Todo from "./Components/Todo"
import { AppContextProvider } from "./Redux/AppContextProvider"
import { todoStore } from "./Redux/store";

const TodoApp = () => {
    return (
        <AppContextProvider store={todoStore}>
            <Todo />
        </AppContextProvider>
    );
};

export default TodoApp;