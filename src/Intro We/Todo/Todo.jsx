import style from "./Todo.module.css";
import ToDoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
    return (
        <div className={style.todo}>
            <h1>TODO</h1>
            <ToDoInput />
            <TodoList />
        </div>
    )
}

export default Todo;