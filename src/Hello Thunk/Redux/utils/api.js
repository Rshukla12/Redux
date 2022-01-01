import { failureLogin, failureSignUp, requestLogin, requestSignUp, successLogin, successSignUp } from "../Auth/actions"
import axios from "axios";
import { getProfileFailure, getProfileRequest, getProfileSuccess } from "../Profile/actions";

export const handleSignUp = ( data ) => ( dispatch ) => {
    dispatch( requestSignUp() );
    axios.post("http://localhost:8080/auth/register", data)
    .then( res => {
        if ( !res.data.error ) dispatch(successSignUp(res.data));
        else {
            dispatch( failureSignUp(res.data) );
        }
    })
    .catch( err => {
        console.log(err);
        dispatch(failureSignUp(err));
    })
}

export const handleLogin = ( data ) => ( dispatch ) => {
    dispatch( requestLogin() );
    axios.post( "http://localhost:8080/auth/login", data )
    .then( res => {
        console.log(res.data)
        if ( !res.data.error ) dispatch( successLogin(res.data.token, data.username));
        else {
            dispatch( failureLogin(res.data) );
        } 
    } )
    .catch( err => {
        console.log(err);
        dispatch(failureLogin(err))
    })

}

export const fetchProfile = ( username, token ) => ( dispatch ) => {
    dispatch( getProfileRequest() );
    axios.get( "http://localhost:8080/user/" + username, {
        headers:{
            'Authorization': `Bearer ${token}`
        }    
    })
    .then( res => {
        if ( res.status !== 401 ){
            dispatch( getProfileSuccess( res.data ) );
        } else {
            dispatch( getProfileFailure( res.data ) );
        }
    })
    .catch( err => {
        dispatch( getProfileFailure( err.data ) );
    })
}