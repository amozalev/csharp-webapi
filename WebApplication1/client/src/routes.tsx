import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import UserList from "./components/Users/UserList";
import SubjectList from "./components/Subjects/SubjectList";

const routes = (
    <Switch>
        <Redirect exact from={'/all-subjects'} to={'/subjects'}/>
        <Route path={'/users'} component={UserList}/>
        <Route path={'/subjects'} component={SubjectList}/>
        <Route render={() => (<h2>404Page not found</h2>)} />
    </Switch>
)

export default routes;