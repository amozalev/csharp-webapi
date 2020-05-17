import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import UserListContainer from "./containers/userListContainer";
import SubjectListContainer from "./containers/subjectListContainer";

const routes = (
    <Switch>
        <Redirect exact from={'/all-subjects'} to={'/subjects'}/>
        <Route path={'/users'} component={UserListContainer}/>
        <Route path={'/subjects'} component={SubjectListContainer}/>
        <Route render={() => (<h2>404Page not found</h2>)} />
    </Switch>
)

export default routes;