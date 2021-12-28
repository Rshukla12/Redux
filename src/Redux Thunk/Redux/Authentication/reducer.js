import { authConstants } from "./actionTypes";
import { loadData } from "../../utils/localStorage";

const token = loadData("token") || null;

const initAuth = {
    isAuth: token !== null,
    token: token
}

export const authReducer = (state=initAuth, action) => {
    switch ( action.type ) {
        case ( authConstants.LOGIN_REQUEST ): {
            return {
                ...state,
                isLoading: true
            }
        }
 
        case ( authConstants.LOGIN_SUCCESS ): {
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                token: action.payload.token
            }
        }

        case ( authConstants.LOGIN_FAILURE ): {
            return {
                ...state,
                isLoading: true,
                isError: true
            }
        }
        
        default:{
            return state;
        }
    }
}