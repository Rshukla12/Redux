import { useState } from "react"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { failureLogin, requestLogin, successLogin } from "../Redux/Authentication/action";

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    });
    const { isAuth, isLoading, isError } = useSelector(state=>state.auth, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();

    if ( isAuth ) return (<Redirect to="/" />)

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = () => {
        dispatch( requestLogin() );
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( state )
        }
        fetch( "https://reqres.in/api/login", options )
        .then( res => res.json() )
        .then ( res => {
            dispatch( successLogin( res.token ) );
            history.push("/");
        })
        .catch ( err => {
            console.log(err);
            dispatch( failureLogin() )
        } )
    } 

    return (
        <div>
            {
                isLoading ? (
                    <div>...Loading</div>
                ) : isError ? (
                    <div>...Error</div> 
                ) : (
                    <div style={{display:"flex", flexDirection: "column", gap: "2rem"}}>
                        <TextField 
                            name="email"
                            type="email"
                            variant="filled"
                            label="Email"
                            value={state.email}
                            onChange={handleChange}
                        />
                        <TextField 
                            name="password"
                            type="password"
                            variant="filled"
                            label="Password"
                            value={state.password}
                            onChange={handleChange}
                        />
                        <br/>
                        <Button varint="contained" onClick={handleLogin}>Login</Button>
                    </div>   
                )
            }
        </div>
    )
}

export default Login;