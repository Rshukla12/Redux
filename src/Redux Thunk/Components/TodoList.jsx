import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchTodos } from "../utils/api";
import style from "./Todo.module.css";

const TodoList = () => {
    const history = useHistory();
    const { todos, isLoading, isError } = useSelector(state=>state.app, shallowEqual); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos())
    }, []);

    const handleClick = (id) => {
        history.push(`/todo/${id}`)
    }

    return (
        <div className={style.list} key={todos.length}> 
            { 
                isLoading ? ( 
                    <div>...Loading</div> 
                ) : isError ? (
                    <div>...Something went wrong</div>
                ) : todos.map( item => (
                    <div className={style.item} key={item.id} style={{background: item.status ? "rgba(32, 185, 32, 0.493)" : "white"}}>
                        <div 
                            className={style.itemText} 
                            style={{textDecoration: item.status ? "line-through" : "none" }}
                            onClick={()=>handleClick(item.id)}
                        >
                            {item.title} - { item.status ? "Completed" : "Incomplete" }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList;