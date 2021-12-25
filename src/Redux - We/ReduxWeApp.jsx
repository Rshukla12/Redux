import Counter from "./Counter App/CounterApp";
import { Provider } from "react-redux";
import { store, todoStore } from "./Redux/store";
import Todo from "./Todo App/Todo";

const ReduxWeApp = () => {
    return (
        <>
            <Provider store={store} >
                <Counter />
            </Provider>
            
            <Provider store={todoStore} >
                <Todo />
            </Provider>
        </>
    )
}

export default ReduxWeApp;