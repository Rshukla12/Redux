import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import style from "../Components/Todo.module.css";
import { deleteTask, fetchTask, toggleTask } from "../utils/api";

const EditTask = () => {
    const { task:item, isLoading, isError } = useSelector(state=>state.app, shallowEqual); 
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const handleToggleTask = () => {
        dispatch( toggleTask(item) )
    };
    
    
    const handleDeleteTask = () => {
        dispatch( deleteTask(item.id, history) );
    };
    
    useEffect(() => {
        fetchTask(id);
    }, [id]);
    
    if ( isError ) return <Redirect to="/not found" />

    return (
        <div className={style.list}> 
            <h1> <span style={{cursor:"pointer"}} onClick={()=>history.push("/")}>Back To Home</span> <br/>Edit Details</h1>
            {
                isLoading ? (
                    <div>...Loading</div> 
                ) : (
                    <>
                        <div className={style.item} key={item.id} style={{background: item.status ? "rgba(32, 185, 32, 0.493)" : "white"}}>
                            <div 
                                className={style.itemText} 
                                style={{textDecoration: item.status ? "line-through" : "none" }}
                            >
                                {item.title} - { item.status ? "Completed" : "Incomplete" }
                                <div>
                                    <button onClick={handleToggleTask}>{ item.status ? "Mark as Incomplete" : "Mark as Completed" }</button>
                                    <button onClick={handleDeleteTask}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default EditTask;