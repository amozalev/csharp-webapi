import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import App from "./App";
import UserList from "./components/Users/UserList";
import SubjectList from "./SubjectList";

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path={'/'} component={App} />
        </Switch>
    </BrowserRouter>
)

export default routes;