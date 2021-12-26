import { Switch, Route } from "react-router-dom";
import Completed from "../Pages/Completed";
import EditTask from "../Pages/EditTask";
import Task from "../Pages/Task";
import Todo from "../Pages/Todo";

const AllRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Todo />
            </Route>
            <Route exact path="/todo/:id">
                <Task />
            </Route>
            <Route exact path="/todo/:id/edit">
                <EditTask />
            </Route>
            <Route exact path="/completed">
                <Completed />
            </Route>
            <Route>
                <div>Oops, this resource doesn't exist!</div>
            </Route>

        </Switch>
    )
}

export default AllRoutes;