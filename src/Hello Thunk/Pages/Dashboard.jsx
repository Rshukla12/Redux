import { shallowEqual, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Github from "../Components/Github";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../Redux/utils/api";

const Dashboard = () => {
    const { isAuth, token, username } = useSelector(state=>state.auth, shallowEqual);
    const { isLoading, isError, profile } = useSelector(state=>state.profile, shallowEqual);
    const dispatch = useDispatch();


    useEffect(()=>{
        username && token && dispatch(fetchProfile( username, token  ));
    }, [token, username]);    

    if ( !isAuth ) return <Redirect to="/login" />

    return (
        <div>
            {
                isLoading ? (
                    <div>...Loading</div>
                ) : isError ? (
                    <div>...Something went wrong</div>
                ) : (
                    <Paper sx={{padding: "2rem 2rem"}}>
                        <div>
                            <h2>Hi, {profile.name}</h2>
                        </div>
                        <Github />
                    </Paper>
                )
            }
        </div>
    )
}

export default Dashboard;