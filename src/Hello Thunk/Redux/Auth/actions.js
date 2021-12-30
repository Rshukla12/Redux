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
    type: constants.SIGNUP_REQUEST,
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

export const successLogin = ( res ) => ({
    type: constants.LOGIN_SUCCESS,
    payload: {
        isLoading: false,
        isAuth: true,
        token: res.token
    }
});

export const failureLogin = ( res ) => ({
    type: constants.LOGIN_REQUEST,
    payload: {
        isLoading: false,
        isError: true,
        authFailed: res,
    }
});