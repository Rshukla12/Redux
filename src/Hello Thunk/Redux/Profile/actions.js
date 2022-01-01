import { profileConstants } from "./actionTypes";

export const getProfileRequest = () => ({
    type: profileConstants.GET_PROFILE_REQUEST,
    payload: {
        isLoading: true,
        isError: false
    }
});

export const getProfileSuccess = ( res ) => ({
    type: profileConstants.GET_PROFILE_SUCCESS,
    payload: {
        isLoading: false,
        isAuth: true,
        profile: res
    }
});

export const getProfileFailure = ( err ) => ({
    type: profileConstants.GET_PROFILE_FAILURE,
    payload: {
        isLoading: false,
        isError: true,
        authFailed: err,
    }
});