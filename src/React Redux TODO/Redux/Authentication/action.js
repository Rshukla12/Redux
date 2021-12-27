import { saveData } from "../../utils/localStorage";
import { authConstants } from "./actionTypes";

export const requestLogin = () => ({
    type: authConstants.LOGIN_REQUEST,
    isLoading: true,
});

export const successLogin = (token) => {
    saveData("token", token);
    return {
        type: authConstants.LOGIN_SUCCESS,
        isLoading: false,
        payload: {
            token
        }
    }
};

export const failureLogin = () => ({
    type: authConstants.LOGIN_FAILURE,
    isLoading: false,
    isError: true
});