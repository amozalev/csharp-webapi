import * as  actions from "./users-actions";
import {UserType} from "../../components/Users/User";

interface StateType {
    users: UserType[];
}

const initialState: StateType = {
    users: []
}

const usersReducer = (state: StateType = initialState, action: actions.actionType) => {
    switch (action.type) {
        case(actions.ADD_USER): {
            return Object.assign({}, state, action.payload);
        }
        case(actions.DELETE_USER): {
            return Object.assign({}, state, action.payload);
        }
        default:
            return state
    }
}

export default usersReducer;