import React from "react";
import { useDispatch } from "react-redux";
import { addTodoRequest, addTodoSuccess, addTodoFailure } from "../Redux/App/actions";
import style from "./Todo.module.css";

const ToDoInput = ({fetchTodos}) => {
    const dispatch = useDispatch();
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
        dispatch( addTodoRequest() );
        const task = {
            ...state,
            status: false
        }

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( task )
        }

        fetch( "https://fake-rjson-server-pro.herokuapp.com/task", options )
        .then( res => {
            dispatch( addTodoSuccess() );
            fetchTodos();
        })
        .catch( err => {
            console.log( err );
            dispatch( addTodoFailure() );
        })

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