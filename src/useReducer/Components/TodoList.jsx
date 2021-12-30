import React, { useContext, useEffect } from "react";
import { AppContext } from "../Redux/AppContextProvider";
import style from "./Todo.module.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useState } from "react";

const TodoList = ({fetchTodos}) => {
    const [ {isLoading, isError, task}, dispatch ] = useContext(AppContext);
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

    useEffect(() => {
        fetchTodos()
    }, []);

    return (
        <>
            <div className={style.list} key={task.length}> 
                { 
                    isLoading ? ( 
                        <div>...Loading</div> 
                    ) : isError ? (
                        <div>...Something went wrong</div>
                    ) : (
                        <div>

                            { 
                            task.map(( item, ind ) => (
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
                    )
                }
            </div>
            <Modal open={isOpen} onClose={handleClose}>
                <Paper className={style.paper}>
                    <Box>
                        <h1>{ data && data.title }</h1>
                        <h2>{ data && data.status ? "Completed" : "Incomplete" }</h2>
                    </Box>
                    <Button variant="contained" 
                        color={ data &&  data.status ? "primary" : "secondary"}
                        disabled={true}
                    >
                        {data && data.status ? "Mark Incomplete" : "Mark Complete"}
                    </Button>
                    <Button variant="contained" 
                        disabled={true}
                    >
                        Delete
                    </Button>
                </Paper>
            </Modal>
        </>
    )
}

export default TodoList;