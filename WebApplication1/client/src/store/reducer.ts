import {combineReducers} from "redux";
import usersReducer from "./users-reducer/users-reducer";
import subjectsReducer from "./subjects-reducer/subjects-reducer";

const rootReducer = combineReducers({
    usersReducer,
    subjectsReducer
});

export default rootReducer;