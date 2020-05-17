export const ADD_SUBJECT = 'subjects/ADD_SUBJECT';
export const DELETE_SUBJECT = 'subjects/DELETE_SUBJECT';

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