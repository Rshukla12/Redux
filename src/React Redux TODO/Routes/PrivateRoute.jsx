import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({children, exact=false, path}) => {
    const { isAuth } = useSelector(state=>state.auth);
    
    if ( !isAuth ) return ( <Redirect to="/login" />)

    return (
        <Route exact path={path}>
            {children}
        </Route>
    )
}

export default PrivateRoute;