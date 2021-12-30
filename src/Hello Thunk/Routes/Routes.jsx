import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/registration">
                <Registration />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    )
}

export default Routes;