import React, { useContext } from "react";
import { AppContext } from "../Redux/AppContextProvider";
import style from "./Todo.module.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { deleteTodo, toggleTask } from "../Redux/action";

const TodoList = () => {
    const { getState, dispatch } = useContext(AppContext)[1];
    const { task } = getState();
    const [ isOpen, setIsOpen ] = useState(false);
    const [ data, setData ] = useState(null);

    const handleClick = (task) => {
        setIsOpen(true);
        setData(task);
    }

    const handleClose = () => {
        setIsOpen(false);
        setData(null);
    }

    const updateStatus = () => {
        dispatch( toggleTask(data.id) );
        setData({
            ...data,
            status: !data.status
        })
    }

    const deleteTask = () => {
        dispatch( deleteTodo(data.id) )
        setIsOpen(false);
    }

    return (
        <>
            <div className={style.list}> 
                { task.map(( item, ind ) => (
                    <div 
                        className={style.item} key={ind} 
                        style={{background: item.status ? "rgba(32, 185, 32, 0.493)" : "white", cursor:"Pointer"}}
                        onClick={()=>handleClick(item)}
                    >
                        <div 
                            className={style.itemText} 
                            style={{textDecoration: item.status ? "line-through" : "none" }}
                        >
                            {item.title} - { item.status ? "Completed" : "Incomplete" }
                        </div>
                    </div>
                ))}
            </div>
            <Modal open={isOpen} onClose={handleClose}>
                <Paper className={style.paper}>
                    <Box>
                        <h1>{ data && data.title }</h1>
                        <h2>{ data && data.status ? "Completed" : "Incomplete" }</h2>
                    </Box>
                    <Button variant="contained" 
                        color={ data &&  data.status ? "primary" : "secondary"}
                        onClick={updateStatus}
                    >
                        {data && data.status ? "Mark Incomplete" : "Mark Complete"}
                    </Button>
                    <Button variant="contained" 
                        onClick={deleteTask}
                    >
                        Delete
                    </Button>
                </Paper>
            </Modal>
        </>
    )
}

export default TodoList;