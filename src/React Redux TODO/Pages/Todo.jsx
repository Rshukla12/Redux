import { useDispatch } from "react-redux";
import { getTodoFailure, getTodoRequest, getTodoSuccess } from "../Redux/actions";
import ToDoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";

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
        } );
    };

    return (
        <>
            <h1>TODO</h1>
            <ToDoInput fetchTodos={fetchTodos} />
            <TodoList fetchTodos={fetchTodos} />
        </>
    )
}

export default Todo;