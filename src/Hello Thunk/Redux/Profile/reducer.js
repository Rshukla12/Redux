import { profileConstants } from "./actionTypes";

const initProfile = {
    isLoading: true,
    isError: false,
    error: null,
    profile: null
};

export const profileReducer = ( state=initProfile, action ) => {
    switch ( action.type ){
        case ( profileConstants.GET_PROFILE_REQUEST ): {
            return {
                ...state,
                isLoading: true
            }
        }

        case ( profileConstants.GET_PROFILE_SUCCESS ): {
            return {
                ...state,
                isLoading: false,
                profile: action.payload.profile
            }
        }
    
        case ( profileConstants.GET_PROFILE_FAILURE ): {
            
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.payload.error
            }
        }

        default: {
            return state
        }
        
    }
}