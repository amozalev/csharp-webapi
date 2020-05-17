import {SubjectType} from "../../components/Subjects/Subject";

export const ADD_SUBJECT = 'subjects/ADD_SUBJECT';
export const DELETE_SUBJECT = 'subjects/DELETE_SUBJECT';
export const FETCH_SUBJECTS = 'subjects/FETCH_SUBJECTS';

export interface actionType {
    type: string;
    payload: any;
}

export const addSubject = (payload: any): actionType => {
    return {
        type: ADD_SUBJECT,
        payload: payload
    }
}

export const deleteSubject = (payload: any): actionType => {
    return {
        type: DELETE_SUBJECT,
        payload: payload
    }
}

export const fetchSubjects = () => {
    return (dispatch: any, getState: any) => {
        fetch('http://localhost:5000/api/subjects')
            .then(res => res.json())
            .then((data: SubjectType[]) => {
                dispatch({
                    type: FETCH_SUBJECTS,
                    payload: data
                });
            })
            .catch(console.log)
    }
}