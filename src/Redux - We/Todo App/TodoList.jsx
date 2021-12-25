import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTodoFailure, getTodoRequest, getTodoSuccess } from "../Redux/action";
import style from "./Todo.module.css";

const TodoList = ({fetchTodos}) => {
    const { task, isLoading, isError } = useSelector(state=>state, shallowEqual); 
    
    useEffect(() => {
        fetchTodos()
    }, []);


    return (
        <div className={style.list}> 
            { 
                isLoading ? ( 
                    <div>...Loading</div> 
                ) : isError ? (
                    <div>...Something went wrong</div>
                ) : task.map(( item, ind ) => (
                    <div className={style.item} key={ind} style={{background: item.status ? "rgba(32, 185, 32, 0.493)" : "white"}}>
                        <div className={style.itemText} style={{textDecoration: item.status ? "line-through" : "none" }}>{item.title}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList;