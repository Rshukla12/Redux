import React, { useContext, useEffect } from "react";
import { AppContext } from "../Redux/AppContextProvider";
import style from "./Todo.module.css";

const TodoList = () => {
    const { getState } = useContext(AppContext)[1];
    const { task } = getState();
    
    return (
        <div className={style.list}> 
            { task.map(( item, ind ) => (
                <div className={style.item} key={ind} style={{background: item.status ? "rgba(32, 185, 32, 0.493)" : "white"}}>
                    <div className={style.itemText} style={{textDecoration: item.status ? "line-through" : "none" }}>{item.title}</div>
                </div>
            ))}
        </div>
    )
}

export default TodoList;