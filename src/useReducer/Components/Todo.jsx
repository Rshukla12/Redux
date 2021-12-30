import { useContext } from "react";
import { getTodoFailure, getTodoRequest, getTodoSuccess } from "../Redux/action";
import { AppContext } from "../Redux/AppContextProvider";
import style from "./Todo.module.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
    const [state, dispatch] = useContext(AppContext);

    const fetchTodos = () => {
        dispatch( getTodoRequest() )
        return fetch( "https://fake-rjson-server-pro.herokuapp.com/task" )
        .then( res => res.json() )
        .then( res => dispatch( getTodoSuccess(res) ) )
        .catch( err => {
            console.log(err);
            dispatch( getTodoFailure() )
        } )
    };


    return (
        <div className={style.todo}>
            <h1>TODO</h1>
            <TodoInput fetchTodos={fetchTodos} />
            <TodoList fetchTodos={fetchTodos} />
        </div>
    )
}

export default Todo;