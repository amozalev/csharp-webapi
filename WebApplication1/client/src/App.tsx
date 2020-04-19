import React from 'react';
import './App.css';
import SubjectList from "./SubjectList";
import UserList from "./components/Users/UserList";
import {NavLink, Route, Switch, withRouter} from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="App">
            <header>
                <ul>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/users'}>Users</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/subjects'}>Subjects</NavLink>
                    </li>
                </ul>
            </header>
            <div id="content">
                <Route path={'/users'} component={UserList}/>
                <Route path={'/subjects'} component={SubjectList}/>
            </div>
        </div>
    );
};

export default withRouter(App);
