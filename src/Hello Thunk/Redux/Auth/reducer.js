import { constants } from "./actionType"

const initAuth = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: null,
    authFailed: null
}

export const authReducer = ( state=initAuth, action ) => {
    switch( action.type ){
        case ( constants.SIGNUP_REQUEST ): {
            return {
                ...state,
                isLoading: true,
                authFailed: null
            }    
        }
        case ( constants.SIGNUP_SUCCESS ): {
            return {
                ...state,
                isLoading: false,
            }    
        }
        case ( constants.SIGNUP_FAILED ): {
            return {
                ...state,
                isLoading: false,
                authFailed: action.payload.authFailed,
                isError: true
            }    
        }
        case ( constants.LOGIN_REQUEST ): {
            return {
                ...state,
                isLoading: true,
                authFailed: null
            }    
        }
        case ( constants.LOGIN_SUCCESS ): {
            return {
                ...state,
                isLoading: false,
                isAuth: true
            }    
        }
        case ( constants.LOGIN_FAILED ): {
            return {
                ...state,
                isLoading: false,
                authFailed: action.payload.authFailed,
                isError: true,
                isAuth: false
            }    
        }
        default : {
            return state;
        }
    }
}