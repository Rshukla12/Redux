import ToDoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import { useHistory } from "react-router-dom";

const Todo = () => {
    const history = useHistory();

    return (
        <>
            <div>
                <h1>TODO</h1>
                <h1> <span style={{cursor:"pointer"}} onClick={()=>history.push("/completed")}>Show Only Completed</span></h1>
            </div>
            <ToDoInput />
            <TodoList />
        </>
    )
}

export default Todo;