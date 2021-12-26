import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import style from "../Components/Todo.module.css";
import { deleteTaskFailure, deleteTaskRequest, deleteTaskSuccess, getTaskFailure, getTaskRequest, getTaskSuccess, toggleTaskFailure, toggleTaskRequest, toggleTaskSuccess } from "../Redux/actions";

const EditTask = () => {
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
            dispatch( getTaskFailure() )
        } );
    };
    
    const toggleTask = () => {
        const pay = {
            ...item,
            status:!item.status
        }

        const opt = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pay)
        }

        dispatch( toggleTaskRequest() );
        return fetch( `https://fake-rjson-server-pro.herokuapp.com/task/${id}`, opt )
        .then( res => {
            dispatch( toggleTaskSuccess() );
            fetchTask({id});
        })
        .catch( err => {
            console.log(err);
            dispatch( toggleTaskFailure() )
        } );
    };
    
    
    const deleteTask = () => {
        dispatch( deleteTaskRequest() );
        fetch( "https://fake-rjson-server-pro.herokuapp.com/task/" + id, {
            method: "DELETE"
        })
        .then( res => {
            dispatch( deleteTaskSuccess() );
            fetchTask({id});
        })
        .catch( err => {
            console.log(err);
            dispatch( deleteTaskFailure() )
        } );
        history.push("/");
    };
    
    useEffect(() => {
        fetchTask({id});
    }, [id]);
    
    if ( isError ) return <Redirect to="/not found" />

    return (
        <div className={style.list}> 
            {
                isLoading ? (
                    <div>...Loading</div> 
                ) : (
                    <>
                        <h1>Edit Detail</h1>
                        <div className={style.item} key={item.id} style={{background: item.status ? "rgba(32, 185, 32, 0.493)" : "white"}}>
                            <div 
                                className={style.itemText} 
                                style={{textDecoration: item.status ? "line-through" : "none" }}
                            >
                                {item.title} - { item.status ? "Completed" : "Incomplete" }
                                <div>
                                    <button onClick={toggleTask}>{ item.status ? "Mark as Incomplete" : "Mark as Completed" }</button>
                                    <button onClick={deleteTask}>Delete</button>
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