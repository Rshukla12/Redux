import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper"
import { cleanAuth } from "../Redux/Auth/actions";
import { handleLogin } from "../Redux/utils/api";

const Login = () => {
    const dispatch = useDispatch();
    const { isAuth, token, isLoading, isError, authFailed } = useSelector(state=>state.auth, shallowEqual);
    const [fill, setFill] = useState(false);
    const [state, setState] = useState({
        username: "",
        password: ""
    });

    
    const onLogin = () => {
        for ( const key in state ){
            if ( state[key].length <= 1 )  {
                setFill(true)
                return;
            }
        }
        dispatch( handleLogin( state ) );
        setFill(false)
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    
    useEffect(() => {
        !token && dispatch( cleanAuth() )
    }, []);
    
    if ( isAuth ) return <Redirect to="/dashboard" />

    return (
        <div>
            {
                isLoading ? (
                    <div>...Loading</div>
                ) : isError && !authFailed ? (
                    <div>...Error</div>
                ) : (
                    <Paper sx={{padding: "2rem 2rem"}}>
                        <h2>Login</h2>
                        { authFailed && <div>{authFailed ? "Incorrect Password or Username" : "Please try Again" }</div> }
                        { fill && <h4>All fields are required</h4> }
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
                            <Button variant="contained" sx={{width: "30%", margin:"auto"}}  onClick={onLogin}>Login</Button>
                        </form>
                    </Paper>
                )
            }
        </div>
    )
}

export default Login;