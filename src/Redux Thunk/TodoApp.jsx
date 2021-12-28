import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import style from "./Components/Todo.module.css";
import { store } from "./Redux/store";
import AllRoutes from "./Routes/AllRoutes";

const TodoApp = () => {
    
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={style.todo}>
                    <AllRoutes />
                </div>
            </Provider>
        </BrowserRouter>
    )
}

export default TodoApp;