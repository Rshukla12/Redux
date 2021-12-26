import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTaskFailure, getTaskRequest, getTaskSuccess } from "../Redux/actions";
import style from "../Components/Todo.module.css";

const Completed = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { todos, isLoading, isError } = useSelector(state=>state, shallowEqual); 
    
    
    const fetchTodos = () => {
        dispatch( getTaskRequest() );
        return fetch( "https://fake-rjson-server-pro.herokuapp.com/task" )
        .then( res => res.json() )
        .then( res => dispatch( getTaskSuccess(res) ) )
        .catch( err => {
            console.log(err);
            dispatch( getTaskFailure() );
        } );
    };

    useEffect(() => {
        fetchTodos()
    }, []);

    const handleClick = (id) => {
        history.push(`/todo/${id}`)
    }

    return (
        <div className={style.list} key={todos.length}> 
            <h1> <span style={{cursor:"pointer"}} onClick={()=>history.push("/")}>Back To Home</span> <br/> Completed Task</h1>
            { 
                isLoading ? ( 
                    <div>...Loading</div> 
                ) : isError ? (
                    <div>...Something went wrong</div>
                ) : todos.filter(item=>item.status).map( item => (
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

export default Completed;