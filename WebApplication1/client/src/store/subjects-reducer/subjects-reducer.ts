import * as  actions from "./subjects-actions";
import {SubjectType} from "../../components/Subjects/Subject";

interface StateType {
    subjects: SubjectType[]
}

const initialState: StateType = {
    subjects: []
}

const subjectsReducer = (state: StateType = initialState, action: actions.actionType) => {
    switch (action.type) {
        case(actions.ADD_SUBJECT): {
            return Object.assign({}, state, action.payload);
        }
        case(actions.DELETE_SUBJECT): {
            return Object.assign({}, state, action.payload);
        }
        default:
            return state
    }
}

export default subjectsReducer;