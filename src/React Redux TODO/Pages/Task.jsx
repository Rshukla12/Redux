import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import style from "../Components/Todo.module.css";
import { getTaskFailure, getTaskRequest, getTaskSuccess } from "../Redux/actions";

const Task = () => {
    const { task:item, isLoading, isError } = useSelector(state=>state, shallowEqual); 
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    
    const fetchTask = ({id}) => {
        dispatch( getTaskRequest() );
        return fetch( "https://fake-rjson-server-pro.herokuapp.com/task/" + id )
        .then( res => res.json() )
        .then( res => dispatch( getTaskSuccess(res) ) )
        .catch( err => {
            console.log(err);
            dispatch( getTaskFailure() );
        } );
    };


    useEffect(() => {
        fetchTask({id})
    }, [id]);
    
    if ( isError ) return <Redirect to="/error" />

    return (
        <div className={style.list}>
            <h1> <span style={{cursor:"pointer"}} onClick={()=>history.push("/")}>Back To Home</span> <br/> Details</h1>
            {
                isLoading ? (
                    <div>...Loading</div>
                ) : item && (
                    <>
                        <div className={style.item} key={item.id} style={{background: item.status ? "rgba(32, 185, 32, 0.493)" : "white"}}>
                            <div 
                                className={style.itemText} 
                                style={{textDecoration: item.status ? "line-through" : "none" }}
                                >
                                {item.title} - { item.status ? "Completed" : "Incomplete" }
                                <div>
                                    <button onClick={()=>history.push(`/todo/${id}/edit`)}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            } 
        </div>
    )
}

export default Task;