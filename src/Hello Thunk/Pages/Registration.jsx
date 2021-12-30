import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, shallowEqual } from "react-redux";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const Registration = () => {
    const { isLoading, isError, authFailed } = useSelector(state=>state, shallowEqual)
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: ""
    });

    const handleSignUp = () => {
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

    // if (  ) return <Redirect to="/login" />

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
                                value={state.description}
                            /> 
                            <Button onClick={handleSignUp}>Sign Up</Button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

export default Registration;