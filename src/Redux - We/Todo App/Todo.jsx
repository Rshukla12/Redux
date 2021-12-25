import { useDispatch } from "react-redux";
import { getTodoFailure, getTodoRequest, getTodoSuccess } from "../Redux/action";
import style from "./Todo.module.css";
import ToDoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
    const dispatch = useDispatch();
    
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
            <ToDoInput fetchTodos={fetchTodos} />
            <TodoList fetchTodos={fetchTodos} />
        </div>
    )
}

export default Todo;