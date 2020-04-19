import React from 'react';
import './App.css';
import {NavLink, withRouter} from "react-router-dom";
import routes from "./routes";

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
                    <li>
                        <NavLink to={'/all-subjects'}>All Subjects</NavLink>
                    </li>
                </ul>
            </header>
            <div id="content">
                {routes}
            </div>
        </div>
    );
};

export default withRouter(App);
