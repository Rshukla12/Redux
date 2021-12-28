import { addTodoFailure, addTodoRequest, addTodoSuccess, deleteTaskFailure, deleteTaskRequest, deleteTaskSuccess, getTaskFailure, getTaskRequest, getTaskSuccess, getTodoFailure, getTodoRequest, getTodoSuccess, toggleTaskFailure, toggleTaskRequest, toggleTaskSuccess } from "../Redux/App/actions";

export const fetchTodos = () => ( dispatch ) => {
    dispatch( getTodoRequest() )
    return fetch( "https://fake-rjson-server-pro.herokuapp.com/task" )
    .then( res => res.json() )
    .then( res => dispatch( getTodoSuccess(res) ) )
    .catch( err => {
        console.log(err);
        dispatch( getTodoFailure() )
    } );
};

export const addTodos = ( title ) => ( dispatch ) => {
    dispatch( addTodoRequest() );
    const task = {
        title,
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
        dispatch( fetchTodos() );
    })
    .catch( err => {
        console.log( err );
        dispatch( addTodoFailure() );
    })
}

export const fetchTask = ( id ) => ( dispatch ) => {
    dispatch( getTaskRequest() );
    return fetch( "https://fake-rjson-server-pro.herokuapp.com/task/" + id )
    .then( res => res.json() )
    .then( res => dispatch( getTaskSuccess(res) ) )
    .catch( err => {
        console.log(err);
        dispatch( getTaskFailure() )
    } );
};

export const toggleTask = ( item ) => ( dispatch ) => {
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
    return fetch( `https://fake-rjson-server-pro.herokuapp.com/task/${item.id}`, opt )
    .then( res => {
        dispatch( toggleTaskSuccess() );
        dispatch(fetchTask(item.id));
    })
    .catch( err => {
        console.log(err);
        dispatch( toggleTaskFailure() )
    } );
};


export const deleteTask = ( id, history ) => ( dispatch ) => {
    dispatch( deleteTaskRequest() );
    fetch( "https://fake-rjson-server-pro.herokuapp.com/task/" + id, {
        method: "DELETE"
    })
    .then( res => {
        dispatch( deleteTaskSuccess() );
        dispatch( fetchTodos() );
        history.push("/");
    })
    .catch( err => {
        console.log(err);
        dispatch( deleteTaskFailure() )
    } );
};