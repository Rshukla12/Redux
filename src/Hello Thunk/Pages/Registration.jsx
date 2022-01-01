import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { handleSignUp } from "../Redux/utils/api";
import { cleanAuth } from "../Redux/Auth/actions";

const Registration = () => {
    const { isAuth, isLoading, isError, authFailed } = useSelector(state=>state.auth, shallowEqual);
    const [fill, setFill] = useState(false);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: ""
    });

    const onSignUp = () => {
        for ( const key in state ){
            if ( state[key].length <= 1 ) {
                setFill(true)
                return;
            }
        }
        dispatch( handleSignUp( state ) );
        setFill(false)
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        dispatch( cleanAuth() )
    }, []);

    if ( isAuth ) return <Redirect to="/login" />

    return (
        <div>
            {
                isLoading ? (
                    <div>...Loading</div>
                ) : isError && !authFailed ? (
                    <div>...Error</div>
                ) : (
                    <Paper sx={{padding: "1rem 2rem"}}> 
                        <h2>Register</h2>
                        { authFailed && <h2>{authFailed.message || "Please try Again"}</h2> }
                        { fill && <h4>All fields are required</h4> }
                        <form style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                            <TextField 
                                type="text" 
                                varinat="outlined"
                                name="name"
                                label="name"
                                value={state.name}
                                required
                                onChange={handleChange}
                            /> 
                            <TextField 
                                type="email" 
                                varinat="outlined"
                                name="email"
                                label="email"
                                value={state.email}
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
                                type="mobile" 
                                varinat="outlined"
                                name="mobile"
                                label="mobile"
                                value={state.mobile}
                                required
                                onChange={handleChange}
                            /> 
                            <TextField 
                                type="text" 
                                varinat="outlined"
                                name="description"
                                label="description"
                                required
                                value={state.description}
                                onChange={handleChange}
                            /> 
                            <Button variant="contained" sx={{width: "30%", margin:"auto"}} onClick={onSignUp}>Sign Up</Button>
                        </form>
                    </Paper>
                )
            }
        </div>
    )
}

export default Registration;