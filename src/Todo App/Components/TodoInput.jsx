import React, { useContext } from "react";
import { addTodo } from "../Redux/action";
import { AppContext } from "../Redux/AppContextProvider";
import style from "./Todo.module.css";

const ToDoInput = () => {
    const { dispatch } = useContext(AppContext)[1];
    const [state, setState] = React.useState({
        title: "",
    });
    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleNewTask = (e) => {
        e.preventDefault();
        dispatch( addTodo(state.title) );
        setState({
            ...state,
            title: ""
        })
    }

    return (
        <form onSubmit={handleNewTask} className={style.form}>
            <div className={style.input}>
                <input type="text" value={state.title} name="title" onChange={handleInput} placeholder="Type to Add Tasks" />    
                <input type="submit" value="+" />
            </div>
        </form>
    )
}

export default ToDoInput