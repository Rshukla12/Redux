import { Switch, Route } from "react-router-dom";
import Completed from "../Pages/Completed";
import EditTask from "../Pages/EditTask";
import Login from "../Pages/Login";
import Task from "../Pages/Task";
import Todo from "../Pages/Todo";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/">
                <Todo />
            </PrivateRoute>
            <PrivateRoute exact path="/todo/:id">
                <Task />
            </PrivateRoute>
            <PrivateRoute exact path="/todo/:id/edit">
                <EditTask />
            </PrivateRoute>
            <PrivateRoute exact path="/completed">
                <Completed />
            </PrivateRoute>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route>
                <div>Oops, this resource doesn't exist!</div>
            </Route>
        </Switch>
    )
}

export default AllRoutes;