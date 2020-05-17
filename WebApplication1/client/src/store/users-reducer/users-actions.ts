export const ADD_USER = 'users/ADD_USER';
export const DELETE_USER = 'users/DELETE_USER';

export interface actionType {
    type: string;
    payload: any;
}

export const addSubject = (payload: any): actionType => {
    return {
        type: ADD_USER,
        payload: payload
    }
}

export const deleteSubject = (payload: any): actionType => {
    return {
        type: DELETE_USER,
        payload: payload
    }
}