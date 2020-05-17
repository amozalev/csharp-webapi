import {UserType} from "../../components/Users/User";

export const ADD_USER = 'users/ADD_USER';
export const DELETE_USER = 'users/DELETE_USER';
export const FETCH_USERS = 'users/FETCH_USERS';

export interface actionType {
    type: string;
    payload: any;
}

interface AddAndDeleteUserPayloadType {
    id: number;
}

interface FetchUsersPayloadType {
    users: UserType[];
}

export const addSubject = (payload: AddAndDeleteUserPayloadType): actionType => {
    return {
        type: ADD_USER,
        payload: payload
    }
}

export const deleteSubject = (payload: AddAndDeleteUserPayloadType): actionType => {
    return {
        type: DELETE_USER,
        payload: payload
    }
}

export const fetchUsers = () => {
    return (dispatch: any, getState: any) => {
        fetch('http://localhost:5000/api/users')
            .then(res => res.json())
            .then((data: UserType[]) => {
                dispatch({
                    type: FETCH_USERS,
                    payload: data
                });
            })
            .catch(console.log)
    }
}