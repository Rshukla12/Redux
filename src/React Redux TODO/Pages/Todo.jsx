import { useDispatch } from "react-redux";
import { getTodoFailure, getTodoRequest, getTodoSuccess } from "../Redux/App/actions";
import ToDoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import { useHistory } from "react-router-dom";

const Todo = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
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
            <div>
                <h1>TODO</h1>
                <h1> <span style={{cursor:"pointer"}} onClick={()=>history.push("/completed")}>Show Only Completed</span></h1>
            </div>
            <ToDoInput fetchTodos={fetchTodos} />
            <TodoList fetchTodos={fetchTodos} />
        </>
    )
}

export default Todo;