import { constants } from "./actionType";

export const requestSignUp = () => ({
    type: constants.SIGNUP_REQUEST,
    payload: {
        isLoading: true,
        isError: false
    }
});

export const successSignUp = ( res ) => ({
    type: constants.SIGNUP_SUCCESS,
    payload: {
        isLoading: false,
    }
});

export const failureSignUp = ( res ) => ({
    type: constants.SIGNUP_FAILED,
    payload: {
        isLoading: false,
        isError: true,
        authFailed: res
    }
});

export const requestLogin = () => ({
    type: constants.LOGIN_REQUEST,
    payload: {
        isLoading: true,
        isError: false
    }
});

export const successLogin = ( token, username ) => ({
    type: constants.LOGIN_SUCCESS,
    payload: {
        isLoading: false,
        isAuth: true,
        token,
        username
    }
});

export const failureLogin = ( res ) => ({
    type: constants.LOGIN_FAILED,
    payload: {
        isLoading: false,
        isError: true,
        authFailed: res,
    }
});

export const cleanAuth = () => ({
    type: constants.CLEAN_AUTH,
    payload: {
        isLoading: false,
        isError: false,
        authFailed: null,
        isAuth: false,
        username: ""
    }
})