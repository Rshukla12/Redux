import { shallowEqual, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Redirect } from "react-router-dom";
import { useState } from "react";


const Login = () => {
    const { isAuth, isLoading, isError, authFailed } = useSelector(state=>state, shallowEqual);
    const [state, setState] = useState({
        username: "",
        password: ""
    });

    
    const handleLogin = () => {
        for ( const key in state ){
            if ( state[key].length <= 1 ) return;
        }

    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    
    if ( isAuth ) return <Redirect to="/dashboard" />

    return (
        <div>
            {
                isLoading ? (
                    <div>...Loading</div>
                ) : isError ? (
                    <div>...Error</div>
                ) : (
                    <div>
                        { authFailed && <div>{authFailed.message || "Please try Again"}</div> }
                        <form style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                             
                            <TextField 
                                type="text" 
                                varinat="outlined"
                                name="username"
                                label="username"
                                value={state.username}
                                required
                                onChange={handleChange}
                            /> 
                            <TextField 
                                type="password" 
                                varinat="outlined"
                                name="password"
                                label="password"
                                value={state.password}
                                required
                                onChange={handleChange}
                            />  
                            <Button onClick={handleLogin}>Login</Button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

export default Login;